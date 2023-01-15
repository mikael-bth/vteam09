<?php

$numFiles   = count(get_included_files());
$memoryUsed = memory_get_peak_usage(true);
$loadTime   = round((microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) * 1000, 2);


// phpcs:disable Generic.Files.LineLength
?><p>Time to load page: <?= $loadTime ?> ms. Files included: <?= $numFiles ?>. Memory used: <?= $memoryUsed / 1024 . "KB" ?>.</p>
