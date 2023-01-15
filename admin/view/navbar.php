<?php

$items = [
    'Startsida'     => 'index.php',
    "Scooters"      => "scooters.php",
    'Users'         => 'users.php',
    'Support'       => 'support.php'
];


$curPage = basename($_SERVER["REQUEST_URI"]);

?><nav>
<?php foreach ($items as $key => $val) :
    $selected = ($curPage === $val) ? "selected" : null;
    ?>
    <a class="<?= $selected ?>" href="<?= $val ?>"><?= $key ?></a>
<?php endforeach; ?>
</nav>
