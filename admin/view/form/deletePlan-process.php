<?php

// Always use strict mote
declare(strict_types=1);

// Bootstrap the application and load the essentials
require "../../config/config.php";

// Get details from the posted form
$doit           = $_POST['doit'] ?? null;
$id             = $_SESSION['id'] ?? null;
$title          = $_POST['title'] ?? null;
$descr          = $_POST['descr'] ?? null;
$begining       = $_POST['begining'] ?? null;
$ending         = $_POST['ending'] ?? null;

if (!$doit) {
    die("You have accessed this page without a posted form.");
}

// Connect to the database
$dsn = "sqlite:../../db/plannering.sqlite";
$db = connectToDatabase($dsn);

// Create the SQL statement
$sql = <<<EOD
    DELETE FROM plannera
    WHERE
    id = ?
    ;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

// Execute the SQL statement towards the database
$args = [$id];
$stmt->execute($args);

header("Location: ../../public/plan.php");
// Redirect to a result page
