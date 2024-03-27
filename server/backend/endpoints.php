<?php
require '../con/database.php';

// Registrierung oder Anmeldung
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($_SERVER['REQUEST_URI'] === '/backend/doctor/register') {
        registerDoctor($pdo, $data, 'users'); // Anpassung des Tabellennamens
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/pharmacy/register') {
        registerPharmacy($pdo, $data, 'users'); // Anpassung des Tabellennamens
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/doctor/login') {
        loginDoctor($pdo, $data, 'users'); // Anpassung des Tabellennamens
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/pharmacy/login') {
        loginPharmacy($pdo, $data, 'users'); // Anpassung des Tabellennamens
    }
}

#-------------------------------------
function registerDoctor($pdo, $data, $tablename) {
    // Daten aus dem POST-Datenarray abrufen
    $name = $data['name'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $address = $data['address'];
    $phoneNumber = $data['phoneNumber'];
    $userId = $data['userId']; // Die Spalte "userId" wird aus dem Datenarray abgerufen

    // SQL-Anweisung für die Einfügung eines neuen Arztes vorbereiten
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, address, phoneNumber, userId) VALUES (:name, :email, :password, :address,:phneNumber, :usserId)");

    // SQL-Anweisung mit den Daten ausführen
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':password' => $password,
        ':address' => $address,
        ':phoneNumber' => $phoneNumber,
        ':userId' => $userId
    ]);

    // Erfolgsmeldung zurückgeben
    echo json_encode(array("message" => "Arzt erfolgreich registriert."));
}

#-------------------------------------------------------
function registerPharmacy($pdo, $data, $tablename) {
    // Daten aus dem POST-Datenarray abrufen
    $name = $data['name'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $address = $data['address'];
    $phoneNumber = $data['phoneNumber'];
    $userId = $data['userId']; // Die Spalte "userId" wird aus dem Datenarray abgerufen

    // SQL-Anweisung für die Einfügung einer neuen Apotheke vorbereiten
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, address, phoneNumber, userId) VALUES (?, ?, ?, ?, ?, ?)");

    // SQL-Anweisung mit den Daten ausführen
    $stmt->execute([$name, $email, $password, $address, $phoneNumber, $userId]);

    // Erfolgsmeldung zurückgeben
    echo json_encode(array("message" => "Apotheke erfolgreich registriert."));
}

#-----------------------------------------
function loginDoctor($pdo, $data, $tablename) {
    // Email und Passwort aus dem POST-Datenarray abrufen
    $email = $data['email'];
    $password = $data['password'];

    // SQL-Anweisung für die Abfrage des Arztes anhand der Email vorbereiten
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $doctor = $stmt->fetch();

    // Überprüfen, ob ein Arzt mit der angegebenen Email gefunden wurde und das Passwort korrekt ist
    if ($doctor && password_verify($password, $doctor['password'])) {
        // Erfolgsmeldung zurückgeben oder Daten des eingeloggten Arztes weiterverarbeiten
        echo json_encode(array("message" => "Arzt erfolgreich eingeloggt."));
    } else {
        // Fehlermeldung zurückgeben, falls keine Übereinstimmung gefunden wurde
        http_response_code(401);
        echo json_encode(array("message" => "Ungültige Anmeldeinformationen."));
    }
}

#----------------------------------------------------------
function loginPharmacy($pdo, $data, $tablename) {
    // Email und Passwort aus dem POST-Datenarray abrufen
    $email = $data['email'];
    $password = $data['password'];

    // SQL-Anweisung für die Abfrage der Apotheke anhand der Email vorbereiten
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $pharmacy = $stmt->fetch();

    // Überprüfen, ob eine Apotheke mit der angegebenen Email gefunden wurde und das Passwort korrekt ist
    if ($pharmacy && password_verify($password, $pharmacy['password'])) {
        // Erfolgsmeldung zurückgeben oder Daten der eingeloggten Apotheke weiterverarbeiten
        echo json_encode(array("message" => "Apotheke erfolgreich eingeloggt."));
    } else {
        // Fehlermeldung zurückgeben, falls keine Übereinstimmung gefunden wurde
        http_response_code(401);
        echo json_encode(array("message" => "Ungültige Anmeldeinformationen."));
    }
}
?>
