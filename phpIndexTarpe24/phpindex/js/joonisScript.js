function sirgeJoon(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 1;
        t.moveTo(20,80);
        t.lineTo(50,100);
        t.stroke();
    }


}
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = "red";
        t.moveTo(50,100);
        t.lineTo(150,100);
        t.lineTo(150,200);
        t.lineTo(50,100);
        t.stroke();
        t.fill();
    }



}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0,0,300,250);
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="green";
        t.lineWidth = 1;
        t.arc(50,50,r.value,0,2*Math.PI,true);
        t.stroke();

        t.beginPath();
        t.fillStyle="green";
        t.lineWidth = 1;
        t.arc(50,130,r.value,0,2*Math.PI,true);
        t.stroke();
        t.fill();
    }


}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(50,30,laius.value,korgus.value);
    }
}
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        const fail=new Image;
        fail.src="https://picsum.photos/200/300";
        t.drawImage(fail, 50,50,100,200);
    }
}
function Valgusfoor(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="grey";
        t.fillRect(100,30,80,170);
    }

    let r=document.getElementById("raadius");
    if(tahvel.getContext) {

        let t = tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle = "green";
        t.lineWidth = 1;
        t.arc(200, 300, r.value, 0, 2 * Math.PI, true);
        t.stroke();

    }
}
function eestilipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);

    }
}
function Itaalialipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="green";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,220,210);
        l.fillStyle="red";
        l.fillRect(220,0,330,210);

    }
}
function RootsiLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="darkblue";
        l.fillRect(0,0,330,320);
        l.fillStyle="yellow";
        l.fillRect(105,0,50,220);
        l.fillStyle="yellow";
        l.fillRect(0,80,330,50);


    }
}
function Mehiko(){
    const lipp=document.getElementById("lipp");

    if(lipp.getContext){

        let l=lipp.getContext("2d");
        l.fillStyle="green";
        l.fillRect(0,0,90,220);
        l.fillStyle="white";
        l.fillRect(110,0,280,210);
        l.fillStyle="red";
        l.fillRect(245,0,330,220);
        const fail=new Image;
        fail.src="mehiko.png";
        fail.onload = () => {
            l.drawImage(fail, 45,10,250,200);
        }


    }
}







