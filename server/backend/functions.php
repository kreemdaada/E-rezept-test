<?php
require_once '../con/database.php';

// Funktion zur Überprüfung der E-Mail-Adresse
function isEmailUnique($pdo, $email, $table) {
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM $table WHERE email = ?");
    $stmt->execute([$email]);
    return $stmt->fetchColumn() == 0;
}
// Funktion zum Abrufen von Benutzerdaten anhand der ID
function getUserDataById($userId) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM doctors WHERE id = ?");
    $stmt->execute([$userId]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

?>
