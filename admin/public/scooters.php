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
FROM scooters
ORDER BY id ASC;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

// Execute the SQL statement towards the database
$args = [];
$stmt->execute($args);

// Get the resultset and print it out
$res = $stmt->fetchAll();

$data["title"] = "Scooters database";
$data["main"] = <<<EOD
<table class="tasklist" id="tasklist">
    <thead>
        <tr>
            <td onclick="sortTable(0)"> ID </td>
            <td onclick="sortTable(1)"> Battery </td>
            <td onclick="sortTable(2)"> Position </td>
            <td onclick="sortTable(3)"> Live </td>
            <td onclick="sortTable(4)"> Pickup </td>
            <td onclick="sortTable(5)"> Active </td>
            <td onclick="sortTable(6)"> Service </td>
            <td onclick="sortTable(7)"> Zone </td>
            <td onclick="sortTable(6)"> Last User </td>
        </tr>
    </thead>
    <tbody>
EOD;
foreach ($res as $row) :
    $id = $row['id'];
    $battery = $row['battery'];
    $pos = $row['position'];
    $live = $row['live'];
    $pickup = $row['pickup'];
    $active = $row['active'];
    $service = $row['service'];
    $zon = $row['zone'];
    $lastuser = $row['lastUser'];

    $data["main"] .= <<<EOD
        <tr>
            <td> {$row["id"]} </td>
            <td> {$row["battery"]} </td>
            <td> {$row["position"]} </td>
            <td> {$row["live"]} </td>
            <td> {$row["pickup"]} </td>
            <td> {$row["active"]} </td>
            <td> {$row["service"]} </td>
            <td> {$row["zone"]} </td>
            <td> {$row["lastUser"]} </td>
        </tr>
    EOD;
endforeach;
$data["main"] .= <<<EOD
</tbody>
</table>
EOD;

$data["tasklist"] = " ";

render("../view/layout/base.php", $data);
