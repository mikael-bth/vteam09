<?php

$user = $_SESSION['user'] ?? null;

?><h1>Logout</h1>

<?php if ($user) : ?>
    <form method="post" action="../view/form/logout-process.php">
        <fieldset>

            <input type="submit" name="doLogout" value="Logout">
        </fieldset>
    </form>

<?php else : ?>
    <p>Du är inte inloggad.</p>
    <p>Vill du <a href="../../public/login.php">Login</a> </p>
<?php endif ?>
