<?php

$id             = htmlentities($res["id"] ?? null);
$title          = htmlentities($res['title'] ?? null);
$begining       = htmlentities($res['begining'] ?? null);
$ending         = htmlentities($res['ending'] ?? null);

$_SESSION['id'] = $id;

?><h1 id="art">Updatera Plannering</h1>

<form method="post" action="../view/form/updateTenta-process.php">
    <fieldset>
        <legend>Uppdatera plannering</legend>
        <p>
            <label>Title:
                <input type="text" name="title" value="<?= $title ?>">
            </label>
        </p>
        <p>
            <label>Start:
                <input type="datetime-local" name="begining" value="<?= $begining ?>">
            </label>
        </p>
        <p>
            <label>Slut:
                <input type="datetime-local" name="ending" value="<?= $ending ?>">
            </label>
        </p>
        <p>
            <input type="reset" value="Återställ ändringar">
            <input type="submit" name="doit" value="Uppdatera">
        </p>
    </fieldset>
</form>