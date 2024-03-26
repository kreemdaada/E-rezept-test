<?php
require '../con/database.php';

// Daten aus der Tabelle "doctors" abrufen
$stmt = $pdo->query("SELECT * FROM doctors");
$doctors = $stmt->fetchAll(PDO::FETCH_ASSOC);

// JSON-Ausgabe der abgerufenen Daten
header('Content-Type: application/json');
echo json_encode($doctors);
?>