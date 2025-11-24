<?php
echo "<h2>Matemaatilised tehted/funktsioonid</h2>";
$arv1=10;
$arv2=15;
$liitmine=$arv1+$arv2;
$lahutamine=$arv1-$arv2;
$korrutis=$arv1*$arv2;
$jagamine=$arv1/$arv2;
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
echo "<strong>Ruutjuur</strong>"