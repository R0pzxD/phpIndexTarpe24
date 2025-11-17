function valinAnsambel(){
    let abba = document.getElementById("abba");
    let the = document.getElementById("the");
    let radiohead = document.getElementById("radiohead");
    let acdc = document.getElementById("acdc");

    let valik="";
    if(abba.checked){
        valik+=abba.value +", ";
    }
    if(the.checked){
        valik+=the.value +", ";
    }
    if(radiohead.checked){
        valik+=radiohead.value +", ";
    }
    if(acdc.checked){
        valik+=acdc.value +", ";
    }

    vastus.innerHTML="Sinu valitud muusikud: " +valik;
    vastus.style.color = "red";
}
function sinuarvamus(){
    let arvamus = document.getElementById("arvamus");
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerText="Sinu arvamus: "+arvamus.value;
    vastus2.style.color = "red";
}
function mitutundipäevas(){
    let aeg = document.getElementById("aeg");
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML="Sa kuulad muusikat "+aeg.value+" tundi päevas";
    vastus3.style.color = "red";
}
function raadio(){
    let ja = document.getElementById("ja");
    let ei = document.getElementById("ei");
    let vastus4 = document.getElementById("vastus4");
    let valik2=""
    if (ja.checked){
        valik2+=ja.value;
    }if (ei.checked){
        valik2+=ei.value;
    }
    vastus4.innerHTML="Raadio kuulamine: " +valik2;
    vastus4.style.color = "red";
}
function raadiojaam(){
    let raadio  = document.getElementById("raadio");
    let vastus5 = document.getElementById("vastus5");
    vastus5.innerHTML="Sinu nimetatud jaamad: " +raadio.value;
    vastus5.style.color = "red";
}
function muusika(){
    let jazz = document.getElementById("jazz");
    let punk = document.getElementById("punk");
    let metal = document.getElementById("metal");
    let country = document.getElementById("country");
    let hiphop = document.getElementById("hiphop");
    let rap = document.getElementById("rap");
    let vastus6 = document.getElementById("vastus6");
    let valik3=""
    if (jazz.checked){
        valik3+=jazz.value;
    }if (punk.checked){
        valik3+=punk.value;
    }
    if (metal.checked){
        valik3+=metal.value;
    }if (country.checked){
        valik3+=country.value;
    }
    if (hiphop.checked){
        valik3+=hiphop.value;
    }
    if (rap.checked){
        valik3+=rap.value;
    }
    vastus6.innerHTML="Sinu vastus: " +valik3;
    vastus6.style.color = "red";
}
function puhasta(){

    let abba = document.getElementById("abba");
    let the = document.getElementById("the");
    let radiohead = document.getElementById("radiohead");
    let acdc = document.getElementById("acdc");
    abba.checked="";
    the.checked=false;
    radiohead.checked=false;
    acdc.checked=false;
    vastus.innerHTML= "";
    vastus2.innerText="";
    vastus3.innerHTML=""
    let ja = document.getElementById("ja");
    let ei = document.getElementById("ei");
    ja.checked=false;
    ei.checked=false;
    vastus5.innerHTML=""


    let jazz = document.getElementById("jazz");
    let punk = document.getElementById("punk");
    let metal = document.getElementById("metal");
    let country = document.getElementById("country");
    let hiphop = document.getElementById("hiphop");
    let rap = document.getElementById("rap");

    jazz.checked=false;
    punk.checked=false;
    metal.checked=false;
    country.checked=false;
    hiphop.checked=false;
    rap.checked=false;
    vastus6.innerHTML="";


}
