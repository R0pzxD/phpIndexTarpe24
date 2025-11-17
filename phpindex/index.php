<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Robin PHP tööde leht</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/joonis.css">
    <script src="js/joonisScript.js"></script>
    <script src="js/muusikajs.js"></script>
</head>
<body>
<?php
include("header.php");
?>
<?php
include("nav.php");
?>
<div class="flex-container">
    <div>
        <?php
         if(isset($_GET["leht"])){
             include('content/'.$_GET["leht"]);
         } else{
             include('content/kodu.php');
         }
        ?>
    </div>
    <div><strong>PHP - </strong>
        PHP on serveripoolne skriptimiskeel, mida kasutatakse veebilehtede ja -rakenduste loomiseks. See on lihtne integreerida HTML-iga ning sobib hästi andmebaasidega töötamiseks.
    </div>
    <div>
        <img src="image/php.svg" alt="PHP pilt">
    </div>
</div>

<?php
include("footer.php");
?>
</body>
</html>