<?php

// Always use strict mote
declare(strict_types=1);


$user = $_SESSION['user'];

// Create a DSN for the database using its filename
$dsn = "sqlite:../db/plannering.sqlite";
$db = connectToDatabase($dsn);


// Prepare and execute the SQL statement
$sql = <<<EOD
SELECT *
FROM tenta
WHERE user=?
ORDER BY begining ASC
;
EOD;

// Prepare the SQL statement so it can be executed
$stmt = $db->prepare($sql);

$args = [$user];
$stmt->execute($args);
// Get the resultset and print it out
$res = $stmt->fetchAll();

// //Create content in a variable
$res = $res ?? [];



?><nav>
    <?php foreach ($res as $row) : ?>
        <?php
        $invoice_date =  date('Y-m-d H:i:s', strtotime($row['ending']));
        $invoice_date2 =  date('Y-m-d H:i:s', strtotime($row['begining']));
        ?>
        <a href="tenta.php?id=<?= $row["id"] ?>">
        <?= $row['title'] ?> <br> <?= $invoice_date2?> <br> <?= $invoice_date?> </a> <br>
    <?php endforeach ?>
</nav>
