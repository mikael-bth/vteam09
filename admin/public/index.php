<?php

declare(strict_types=1);

require "../config/config.php";


$data["title"] = "Vällkomen";
$data["main"] = <<<EOD
<article>
    <h2> Hi and welcome to the admin page!</h2>
    <p>
    </p>

</article>
EOD;

render("../view/layout/base.php", $data);
