<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> osay21 | Task manager</title>

    <!-- Load in css based of content has Aside or not -->
    <?php if ($aside ?? null) : ?>
        <link rel="stylesheet" href="css/style.css">
    <?php else : ?>
        <link rel="stylesheet" href="css/style-noAside.css">
    <?php endif ?>

    <?php if ($lib_cal ?? null):  ?>
        <!-- php calendar scripts -->
        <script src="fullcalendar/lib/jquery.min.js"></script>
        <script src="fullcalendar/lib/moment.min.js"></script>
        <script src="fullcalendar/fullcalendar.min.js"></script>
        <link rel="stylesheet" href="fullcalendar/fullcalendar.min.css" />
        <script src="js/cal.js"></script>
    <?php elseif ($tasklist ?? null): ?>
        <link rel="stylesheet" href="css/tasklist.css">
        <script src="js/headersort.js"></script>
    <?php endif ?>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet">

    <style>
        #calendar {
        width: 700px;
        margin: 0 auto;
        }
        .response {
            height: 60px;
        }
        .success {
        background: #cdf3cd;
        padding: 10px 60px;
        border: #c3e6c3 1px solid;
        display: inline-block;
        }
    </style>
</head>
<body>

<div class="row">
    <header class="siteheader">
        <p> Admin interface</p>
    </header>
</div>

<div class="navbar navigation">
    <?php require __DIR__ . "/../navbar.php" ?>
</div>

<div class="row row-main">
    <?php if ($aside ?? null) : ?>
        <aside class="aside">
            <h3 style="text-align: center;"> Navbar </h3> <hr>
            <?= $aside ?? null ?>
            <div class="animation start-home"></div>
        </aside>
    <?php endif ?>


    <main class="main">
        <center>
            <h3 style="color:red"> <?= $_SESSION['ERROR'] ?? NULL ?> </h3>
        </center>
        <?php if ($main ?? null) : ?>
            <?= $main ?? null ?>
        <?php else : ?>
            <h1>Page</h1>
            <p>This is default text for the page.</p>
        <?php endif; ?>
    </main>
</div>

<div class="row">
    <footer class="sitefooter">
        <p> Copyright all rights reserved &copy; vteam09 </p>
    </footer>
</div>

<script src="js/main.js"></script>
</body>
</html>

<?php
    $_SESSION['ERROR'] = "";
?>
