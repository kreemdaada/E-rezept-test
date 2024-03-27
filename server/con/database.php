<?php
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Fehlerausgabe aktivieren
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Verbindungsdaten
$servername = "localhost";
$username = "root";
$password = "";
$database = "vue-app";

//PDO Attributes Fehler beheben für PDO
$optionen = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	];
	try{
	// Verbindung herstellen
	$db = new PDO("mysql:host=$servername;dbname=$database", $username, $password,$optionen);
	}
	catch(PDOException $error){
		echo "Fehler beim Verbinden";
		die();
	}
	//wenn änderung in databank / tablle sollten in utf8 .
	$db->query('SET NAMES utf8');
?>
