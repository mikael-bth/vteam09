<?php
$doit           = htmlentities($res['doit'] ?? null);
$id             = htmlentities($res["id"] ?? null);
$title          = htmlentities($res['title'] ?? null);
$descr          = htmlentities($res['descr'] ?? null);
$begining       = htmlentities($res['begining'] ?? null);
$ending         = htmlentities($res['ending'] ?? null);

?><h1 id="art">Lägg till Plannering</h1>

<form method="post" action="../view/form/insertPlan-prosses.php">
    <fieldset>
        <legend>Lägg till i databasen</legend>
        <p>
            <label>Title:
                <input type="text" name="title" value="<?= $title ?>">
            </label>
        </p>

        <p>
            <label>Beskrivning:<br>
                <textarea id="text" name="descr" rows="10"><?= $descr ?></textarea>
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
            <input type="reset" value="Reset">
            <input type="submit" name="doit" value="Add">
        </p>
    </fieldset>
</form>

<h1 id="tenta">Lägg till Tenta</h1>

<form method="post" action="../view/form/insertTenta-prosses.php">
    <fieldset>
        <legend>Lägg till i databasen</legend>
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
            <input type="reset" value="Reset">
            <input type="submit" name="doit" value="Add">
        </p>
    </fieldset>
</form>
