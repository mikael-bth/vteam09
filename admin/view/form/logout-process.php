<?php

// Always use strict mote
declare(strict_types=1);

// Bootstrap the application and load the essentials
require "../../config/config.php";

// Get details from the posted form
$doLogout   = $_POST['doLogout'] ?? null;

if ($doLogout) {
    $_SESSION['user'] = null;
    unset($_SESSION['user']);
}

header("Location: ../../public/login.php");
