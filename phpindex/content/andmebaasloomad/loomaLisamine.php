<?php
require('conf.php');
global $yhendus;
if(isset($_REQUEST["loomanimi"]) && $_REQUEST["loomanimi"]!== 0){
    $kask=$yhendus->prepare("INSERT INTO loomad(loomanimi, kaal, varv) VALUES(?,?,?)");
    $kask->bind_param("s",$_REQUEST['loomanimi'],$_REQUEST['kaal'],$_REQUEST['varv']);
    $kask->execute();
    header("Location:loomadekuvamine.php");
}

?>
<!DOCTYPE html>
<html lang="et">
<head>
    <title>Looma lisamine SQL tabeli sisse</title>
</head>
<body>
<h1>
    Looma lisamine
</h1>
<form action="" name="Loom">
    <table>
    <tr>
        <td>
            <label for="loomanimi">Sisesta looma nimi</label>
        </td>
    </tr>
    <label for="loomanimi">Sisesta looma nimi</label>
    <input type="text" name="loomanimi" id="loomanimi">
    <br>
    <label for="kaal">Kaal</label>
    <input type="number" name="kaal" id="kaal">
    <br>
    <label for="varv">Looma värv</label>
    <input type="color" name="varv" id="varv">
    <br>
    <label for="varv">Looma värv</label>
    <input type="color" name="varv" id="varv">
    <br>
    <input type="submit" value="Lisa">
    </table>
</form>

</body>
</html>
