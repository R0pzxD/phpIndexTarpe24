<?php
echo "<div>";
echo "<h1>Ajafunktsioonid</h1>";
echo "Tänane kuupäev".date("d.m.Y");
date_default_timezone_set("Europe/Tallinn");
echo "<br>";
echo "<a href='https://www.php.net/manual/en/timezones.europe.php'>timeszones</a>";
echo "<br>";
echo "time()- aeg sekundites".time();
echo "<br>";
echo "date() -".date("d.m.Y G:i:s", time());
echo "<pre>
date('d.m.Y G:i:s', time());
d - ? 01...34
m - 1...12
Y - neljakohane arv
G - 24h formaat
i - minutid 0..59
s - sekundit 0...59

</pre>";
echo "</div>";
echo "<div>";
echo "<h2>Tehted kuupäevaga</h2>";
echo "<br>";
echo "+1min = time()+60 ".date('d.m.Y G:i:s', time()+60);
echo "<br>";
echo "+1tund = time()+60 ".date('d.m.Y G:i:s', time()+60*60);
echo "<br>";
echo "+1päev = time()+60 ".date('d.m.Y G:i:s', time()+60*60*24);
echo "</div>";
echo "<div>";
echo "<h2>Kuupäeva genereerimine</h2>";
echo "<br>";
echo "mktime(tunnid, minutid, sekundid, kuu, päev, aasta)";
echo "<br>";
$synnipaev=mktime(5,5,5,4,19, 2008);
echo "Minu sünnipäev ".date("d.m.Y G:i:s", $synnipaev);
echo "<br>";
echo "massiivi (array) abil näidata tänane kuu nimetus";
echo "<br>";
$kuud=array(1=>'jaanuar','veebruar','märts','april','mai','juuni','juuli','august','september','oktoober','november','detsember');
$päev=date('d');
$aasta=date('Y');
$kuu=$kuud[date('m')];
echo "Tänane kuupäev kuu nimega".$päev.".".$kuu." ".$aasta."a";
echo "</div>";
echo "<br>";
