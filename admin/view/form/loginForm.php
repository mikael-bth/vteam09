<?php

$errorLogin = $_SESSION['error'] ?? null;
$_SESSION['error'] = null;

?><h1>Login</h1>

<form method="post" action="../view/form/login-process.php">
    <fieldset>
        <p>
            <label>Username:
                <input type="text" name="user">
            </label>
        </p>

        <p>
            <label>Password:
                <input type="password" name="pass">
            </label>
        </p>

        <input type="submit" name="doLogin" value="Login">

        <p>
            Om du vill använda värktyget men har inget konto?
            <a href="konto.php"> Skapa ditt konto här </a>
        </p>

        <?php if ($errorLogin) : ?>
            <div style="background-color: yellow; color: red;">
                <p> <?= $errorLogin ?> </p>
            </div>
        <?php endif ?>

    </fieldset>
</form>
