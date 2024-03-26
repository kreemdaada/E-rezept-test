<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Datenbankkonfiguration
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'vue-app';

// Fehlerausgabe aktivieren
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verbindung zur Datenbank herstellen
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Überprüfen Sie die Verbindung auf Fehler
    if ($conn->connect_error) {
        // Verbindungsfehler
        http_response_code(500);
        echo json_encode(['error' => 'Verbindung zur Datenbank fehlgeschlagen']);
        exit();
    }
} catch (Exception $e) {
    // Fehler beim Verbinden mit der Datenbank
    http_response_code(500);
    echo json_encode(['error' => 'Verbindung zur Datenbank fehlgeschlagen']);
    exit();
}

// Zeichensatz für die Verbindung setzen
$conn->set_charset("utf8");

// Hier können Sie Ihre Datenbankabfragen durchführen und die Ergebnisse im JSON-Format zurückgeben

?>
