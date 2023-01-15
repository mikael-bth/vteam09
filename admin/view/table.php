<?php

$user = $_SESSION['user'] ?? null;

?><style>
table, th, td {
    border: 1px solid black;
}
</style>
<?php if ($user) : ?>
    <h3><a href="insert.php"> Insert new data shortcut </a> </h3>
    <p>Your resultset contains <?= count($resArt) ?> Article.</p>
    <table>
        <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Titel (klickbar)</th>
            <th>Admin</th>
        </tr>

        <?php foreach ($resArt as $row) : ?>
            <tr>
                <td>
                    <?= $row['id'] ?>
                </td>
                <td>
                    <?php if ($row['image1'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image1'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image2'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image2'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image1'] == "" && $row['image2'] == "") : ?>
                        No images found
                    <?php endif; ?>
                </td>
                <td>
                    <a href="artiklar.php?id=<?= $row['id'] ?>">
                            <?= $row['title'] ?>
                    </a>
                </td>
                <td>
                    <a href="updateArt.php?id=<?= $row['id'] ?>">
                        Update
                    </a>
                    <a href="deleteArt.php?id=<?= $row['id'] ?>">
                        Delete
                    </a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <p>Your resultset contains <?= count($resObj) ?> Objects.</p>
    <table>
        <tr>
            <th>Id</th>
            <th>Images</th>
            <th>Titel (klickbar)</th>
            <th>Admin</th>
        </tr>

        <?php foreach ($resObj as $row) : ?>
            <tr>
                <td>
                    <?= $row['id'] ?>
                </td>
                <td>
                    <?php if ($row['image1'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image1'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image2'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image2'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image1'] == "" && $row['image2'] == "") : ?>
                        No images found
                    <?php endif; ?>
                </td>
                <td>
                    <a href="object.php?id=<?= $row['id'] ?>">
                            <?= $row['title'] ?>
                    </a>
                </td>
                <td>
                    <a href="updateObj.php?id=<?= $row['id'] ?>">
                        Update
                    </a>
                    <a href="deleteObj.php?id=<?= $row['id'] ?>">
                        Delete
                    </a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
<?php else : ?>
    <p>Your resultset contains <?= count($resArt) ?> Article.</p>
    <table>
        <tr>
            <th>Id</th>
            <th>Images</th>
            <th>Titel (klickbar)</th>
        </tr>

        <?php foreach ($resArt as $row) : ?>
            <tr>
                <td>
                    <?= $row['id'] ?>
                </td>
                <td>
                    <?php if ($row['image1'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image1'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image2'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image2'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image1'] == "" && $row['image2'] == "") : ?>
                        No images found
                    <?php endif; ?>
                </td>
                <td>
                    <a href="artiklar.php?id=<?= $row['id'] ?>">
                            <?= $row['title'] ?>
                    </a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>

    <p>Your resultset contains <?= count($resObj) ?> Objects.</p>
    <table>
        <tr>
            <th>Id</th>
            <th>Images</th>
            <th>Titel (klickbar)</th>
        </tr>

        <?php foreach ($resObj as $row) : ?>
            <tr>
                <td>
                    <?= $row['id'] ?>
                </td>
                <td>
                    <?php if ($row['image1'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image1'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image2'] != "") : ?>
                        <img src="../img/80x80/<?= $row['image2'] ?>">
                    <?php endif; ?>
                    <?php if ($row['image1'] == "" && $row['image2'] == "") : ?>
                        No images found
                    <?php endif; ?>
                </td>
                <td>
                    <a href="object.php?id=<?= $row['id'] ?>">
                            <?= $row['title'] ?>
                    </a>
                </td>
            </tr>
        <?php endforeach ?>
    </table>
<?php endif; ?>
