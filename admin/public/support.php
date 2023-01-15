<?php

// Always use strict mote
declare(strict_types=1);

// Bootstrap the application and load the essentials
require "../config/config.php";

// Get details if the form is posted or not
$currentId = $_GET['id'] ?? null;


// Create a DSN for the database using its filename
$dsn = "sqlite:../db/vteam.sqlite";
$db = connectToDatabase($dsn);



// Prepare and execute the SQL statement
$sql = <<<EOD
SELECT *
FROM support
ORDER BY id ASC;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

// Execute the SQL statement towards the database
$args = [];
$stmt->execute($args);

// Get the resultset and print it out
$res = $stmt->fetchAll();

$data["title"] = "Support database";
$data["main"] = <<<EOD
<table class="tasklist" id="tasklist">
    <thead>
        <tr>
            <td onclick="sortTable(0)"> ID </td>
            <td onclick="sortTable(1)"> UserID </td>
            <td onclick="sortTable(2)"> lastChange </td>
            <td onclick="sortTable(3)"> Status </td>
        </tr>
    </thead>
    <tbody>
EOD;
foreach ($res as $row) :

    $data["main"] .= <<<EOD
        <tr>
            <td> {$row["id"]} </td>
            <td> {$row["userID"]} </td>
            <td> {$row["lastChange"]} </td>
            <td> {$row["status"]} </td>
        </tr>
    EOD;
endforeach;
    $data["main"] .= <<<EOD
        </tbody>
        </table>
    EOD;

$data["tasklist"] = " ";

render("../view/layout/base.php", $data);
