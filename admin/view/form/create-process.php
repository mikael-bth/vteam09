<?php

// Always use strict mote
declare(strict_types=1);

// Bootstrap the application and load the essentials
require "../../config/config.php";

// Get details from the posted form
$doit           = $_POST['doit'] ?? null;
$id             = $_POST["id"] ?? null;
$user           = $_POST['user'] ?? null;
$password       = $_POST['pass'] ?? null;

// Connect to the database
$dsn = "sqlite:../../db/plannering.sqlite";
$db = connectToDatabase($dsn);

    // Create the SQL statement
    $sql = <<<EOD
        INSERT INTO login
        (username, password)
        VALUES (?, ?);
    EOD;

    // Prepare the SQL statement so it can be executed
    $stmt = $db->prepare($sql);

    // Execute the SQL statement towards the database
    $args = [$user, $password];
    $stmt->execute($args);

    $id = $db->lastInsertId();

    $_SESSION['user'] = $user;
    header("Location: ../../public/plan.php");

