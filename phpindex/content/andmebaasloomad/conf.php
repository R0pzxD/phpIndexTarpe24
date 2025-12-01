<?php
$servername = "localhost";
$kasutajanimi="robinToll";
$parool='12345';
$andmebaasinimi='robinToll';
$yhendus=new mysqli($serverinimi,$kasutajanimi,$parool,$andmebaasinimi);
$yhendus->set_charset("utf8");

/*$servername = "localhost";
$kasutajanimi="d141165_trobin";
$parool='12345';
$andmebaasinimi='d141165_phpbaas';
$yhendus=new mysqli($serverinimi,$kasutajanimi,$parool,$andmebaasinimi);
$yhendus->set_charset("utf8");
