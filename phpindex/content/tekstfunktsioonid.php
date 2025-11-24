<?php
function clearVarsExcept($url, $varname)
{
    $url = basename($url);
    if (str_starts_with($url, "?")) {
        return "?$varname=".$_REQUEST[$varname];
    }
    return strtok($url, "?")."&$varname=".$_REQUEST[$varname];
}

echo '<br>';
$linn="sss";
echo "<ol><li>Linn algab ".substr($linn, 0,1)."</li>"
?>
    <form action="<?=clearVarsExcept($_SERVER['REQUEST_URI'], "leht")?>" method="post">

    </form>