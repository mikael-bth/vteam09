<?php

// Always use strict mote
declare(strict_types=1);

// Bootstrap the application and load the essentials
require "../../config/config.php";

// Get details from the posted form
$doLogin = $_POST['doLogin'] ?? null;
$user    = $_POST["user"] ?? null;
$pass    = $_POST["pass"] ?? null;

$dsn = "sqlite:../../db/plannering.sqlite";
$db = connectToDatabase($dsn);
try{
    // Create the SQL statement
    $sql = <<<EOD
        SELECT * FROM login WHERE username=? AND password=?;
    EOD;

    // Prepare the SQL statement so it can be executed
    $stmt = $db->prepare($sql);

    // Execute the SQL statement towards the database
    $args = [$user, $pass];
    $stmt->execute($args);

    $res = $stmt->fetchAll();

    $res = $res ?? [];

    if($res == []){
        $_SESSION['error'] = "Misslyckad inlogning";
        header("Location: ../../public/login.php");
    }

    foreach ($res as $row) {
        if ($row['username'] != null || $row['password']){
            $_SESSION['user'] = $row['username'];
            header("Location: ../../public/plan.php");
        }
    }
} catch (Exception){
    die("Error");
}



if (!$doLogin) {
    die("You have accessed this page without a posted form.");
}
