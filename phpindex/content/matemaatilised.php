<?php
function clearVarsExcept($url, $varname)
{
    $url = basename($url);
    if (str_starts_with($url, "?")) {
        return "?$varname=".$_REQUEST[$varname];
    }
    return strtok($url, "?")."?$varname=".$_REQUEST[$varname];
}
echo "<h2>Matemaatilised tehted/funktsioonid</h2>";

$arv1=100;
$arv2=15;
$liitmine=$arv1+$arv2;
$lahutamine=$arv1-$arv2;
$korrutis=$arv1*$arv2;
$jagamine=$arv1/$arv2;
$Laius =20;
$pikkus=7;
//20%
$protsent= 20;
echo "arv1 on ".$arv1." ja arv2 on ".$arv2."<br>";
echo "<strong>Vastused:</strong> liitmine: ".$liitmine."<br>";
echo "lahutamine: ".$lahutamine."<br>";
echo "korrutis: ".$korrutis."<br>";
echo "jagamine: ".$jagamine."<br>";
echo "Omistamise operaatorid: ";
echo"<br>";
$arv1++;
echo $arv1."- suurendamine ühe võrra";
echo"<br>";
$arv1--;
echo $arv1."- Vähendamine ühe võrra";
echo"<br>";
echo "<strong>Ruutjuur -sqrt()</strong>".sqrt($arv1);
echo"<br>";
echo "<strong>Kõige väiksema ja suurema leidmine</strong> ";
echo"<br>";
echo "Leiab kõige väiksema arvu ". min($arv1, $arv2);
echo"<br>";
echo "Leiab kõige suurema arvu ". max($arv1, $arv2);
echo"<br>";
echo "<strong>Random arv 1-100</strong>";
echo"<br>";
echo "Random arv: ". rand(1,100);
echo"<br>";
echo"<strong>Ühe protsendi leidmine arvust arv1</strong>";
echo"<br>";
echo "20 Protsenti arvust 1: ".($arv1 * $protsent)/100;
echo"<br>";
echo "<strong>Ristküliku pindala arvutamine pikkuse ja laiusega</strong>";
echo"<br>";
echo "Laius: ". $Laius." pikkus: ".$pikkus;
echo"<br>";
echo "Pindala:" .$Laius * $pikkus;
echo"<br>";
echo "<strong>Trigonomeetria</strong>";
echo"<br>";
echo "arv2 cos: ". cos($arv2)."<br>";
echo "arv2 sin: ". sin($arv2)."<br>";
echo "arv2 tan: ". tan($arv2)."<br>";
echo "<h2>Arvmõistatus. Arva ära kaks arvu vahemikus 0...10</h2>";
$salaarv1=4;
$salaarv2=9;
echo "<ol><li>Kui esimene arv korrutada 5-ga, siis tuleb ".($salaarv1*5)."</li>";
echo "<br>";
echo "<li>Kui esimene arv jagada 2-ga, siis tuleb ".($salaarv1/2)."</li>";
echo "<br>";
echo "<li>Esimese arvu 20% on ".(($salaarv1 * $protsent) /100)."</li>";
echo "<br>";
echo "<li>Kui teist arvu korrutada 5-ga, siis tuleb ".($salaarv2*5)."</li>";
echo "<br>";
echo "<li>Kui teist arvu jagada 2-ga, siis tuleb ".($salaarv2/3)."</li>";
?>
<form action="<?=clearVarsExcept($_SERVER['REQUEST_URI'], "leht")?>" method="post">
    <label for="arv1">Arv1: </label>
    <input type="number" id="arv1" name="arv1" min="0" max="10" step="1">
    <br>
    <label for="arv2">Arv2: </label>
    <input type="number" id="arv2" name="arv2" min="0" max="10" step="1">
    <input type="submit" value="Kontrolli">
</form>
<?php


if(isset($_REQUEST["arv1"])&&($_REQUEST['arv1']!="")){
echo"X;";
if ($_REQUEST["arv1"]== $salaarv1) {
    echo "<div id='correct'>";
    echo $_REQUEST["arv1"] . " on õige";
    echo "</div>";
} else{
    echo "<div id='incorrect'>";
    echo $_REQUEST['arv1'] . " on vale.";
    echo "</div>";
}
}
if(isset($_REQUEST["arv2"])&&($_REQUEST['arv2']!="")){
    echo"X;";
    if ($_REQUEST["arv2"]== $salaarv2) {
        echo "<div id='correct'>";
        echo $_REQUEST["arv2"] . " on õige";
        echo "</div>";
    } else{
        echo "<div id='incorrect'>";
        echo $_REQUEST['arv2'] . " on vale.";
        echo "</div>";
    }
}

