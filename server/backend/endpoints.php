<?php
require '../con/database.php';

// Registrierung oder Anmeldung
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($_SERVER['REQUEST_URI'] === '/backend/doctor/register') {
        register($pdo, $data);
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/pharmacy/register') {
        register($pdo, $data);
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/doctor/login') {
        login($pdo, $data);
    } elseif ($_SERVER['REQUEST_URI'] === '/backend/pharmacy/login') {
        login($pdo, $data);
    }
}
?>
