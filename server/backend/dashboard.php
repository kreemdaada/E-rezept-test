<?php
session_start();

// Überprüfen, ob der Benutzer eingeloggt ist
if (!isset($_SESSION['arztId']) || !isset($_SESSION['ApothekeId'])) {
    header("Location: login.php"); // Falls nicht, Weiterleitung zur Anmeldeseite
    exit();
}

// Hier können Sie zusätzliche Überprüfungen oder Benutzerdaten laden, die im Dashboard angezeigt werden sollen
$arztId = $_SESSION['arztId'];
$ApothekeId = $_SESSION['ApothekeId'];
// Beispiel: Laden von weiteren Benutzerdaten aus der Datenbank

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>Willkommen im Dashboard</h1>
    <p>Sie sind als Arzt <?php echo $arztId; ?> und Apotheke <?php echo $ApothekeId; ?> eingeloggt!</p>
    <!-- Hier können Sie weitere Inhalte für das Dashboard hinzufügen -->
</body>
</html>
