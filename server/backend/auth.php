<?php
error_reporting(E_ALL);

require_once dirname(__DIR__,2) . '/con/database.php';
require_once '../functions.php';

require 'vendor/autoload.php';
use Firebase\JWT\JWT;

// JWT-Secret
$secretKey = bin2hex(random_bytes(32)); // Generiert einen sicheren, zufällig generierten Schlüssel

// Authentifizierung
function login($pdo, $data) {
    var_dump($data);
    if (!isset($data['email']) || !isset($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'E-Mail-Adresse oder Passwort fehlen']);
        exit();
    }

    $table = ($_SERVER['REQUEST_URI'] === '/backend/doctor/login') ? 'doctors' : 'pharmacies';
    $stmt = $pdo->prepare("SELECT * FROM $table WHERE email = :email");
    $stmt->bindParam(':email', $data['email']);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $userType = ($_SERVER['REQUEST_URI'] === '/backend/doctor/login') ? 'doctor' : 'pharmacy';

    if (!$user || !password_verify($data['password'], $user['password'])) {
        var_dump($data);
        // Ungültige Anmeldedaten
        http_response_code(401);
        echo json_encode(['error' => 'Ungültige Anmeldedaten']);
        exit();
    }

    // Anmeldung erfolgreich, JWT-Token erstellen
    $payload = [
        'id' => $user['id'],
        'email' => $user['email'],
        'type' => $userType,
    ];
    $jwt = JWT::encode($payload, $GLOBALS['secretKey'], 'HS256');

    // Token an den Client senden
    echo json_encode(['token' => $jwt]);
}

// Registrierung
function register($pdo, $data) {
    var_dump($data);
    if (!isset($data['name']) || !isset($data['email']) || !isset($data['password']) || !isset($data['address']) || !isset($data['phoneNumber']) || !isset($data['arztId'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Fehlende Registrierungsdaten']);
        exit();
    }

    // Passwort hashen
    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);

    // Überprüfen, ob die E-Mail-Adresse bereits vorhanden ist
    $table = ($_SERVER['REQUEST_URI'] === '/backend/doctor/register') ? 'doctors' : 'pharmacies';
    if (!isEmailUnique($pdo, $data['email'], $table)) {
        http_response_code(400);
        echo json_encode(['error' => 'Die E-Mail-Adresse ist bereits registriert']);
        exit();
    }

    // Benutzer in der Datenbank speichern
    $stmt = $pdo->prepare("INSERT INTO `doctors` (`name`,` email`,` password`,` address`,` phoneNumber`, `arztId`) VALUES (:name, :email, :password, :address, :phoneNumber, :arztId)");
    $stmt->bindParam(':name', $data['name']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':password', $hashedPassword);   
    $stmt->bindParam(':address', $data['address']);
    $stmt->bindParam(':phoneNumber', $data['phoneNumber']);
    $stmt->bindParam(':arztId', $data['arztId']);
    $stmt->execute();
    
    // Erfolgreiche Registrierung
    http_response_code(201);
    echo json_encode(['message' => 'Registrierung erfolgreich']);
    exit();
}
?>
