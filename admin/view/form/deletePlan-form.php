<?php

$id             = htmlentities($res["id"] ?? null);
$title          = htmlentities($res['title'] ?? null);
$descr          = htmlentities($res['descr'] ?? null);
$begining       = htmlentities($res['begining'] ?? null);
$ending         = htmlentities($res['ending'] ?? null);

$_SESSION['id'] = $id;

?><h1>Är du säker på detta?</h1>
    <p>Du kommer inte kunna ångra detta beslut och planneringen kommer inte kunna nås igen.</p>


<form method="post" action="../view/form/deletePlan-process.php">
    <fieldset>
        <legend>Ta bort planneringen '<?= $title ?>'</legend>
        <p>
            <label>Title:
                <input type="text" name="title" value="<?= $title ?>" readonly>
            </label>
        </p>

        <p>
            <label>Beskrivning: <br>
                <textarea id="data" name="descr" rows="10" readonly><?= $descr ?></textarea>
            </label>
        </p>
        <p>
            <label>Start:
                <input type="datetime-local" name="begining" value="<?= $begining ?>" readonly>
            </label>
        </p>
        <p>
            <label>Slutar:
                <input type="datetime-local" name="ending" value="<?= $ending ?>" readonly>
            </label>
        </p>
        <input type="submit" name="doit" value="Avklarat">
    </fieldset>
</form>
<?php
