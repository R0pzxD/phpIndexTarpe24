function puhasta() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        // Täielik tühjendamine (võid ka mustaks panna)
        t.clearRect(0, 0, tahvel.width, tahvel.height);

        // Lumi peatamine
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }

        // Lumepallide algpositsioonid taastamine
        x = [50, 100, 150, 200, 250];
        y = [0, 40, 80, 120, 160];
    }
}


function puu() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");


        t.fillStyle = "brown";
        t.fillRect(140, 200, 26, 50);
        t.fillStyle = "green";
        t.strokeStyle = "black";
        t.beginPath();
        t.moveTo(100, 200);
        t.lineTo(153, 140);
        t.lineTo(206, 200);
        t.closePath();
        t.stroke();
        t.fill();
        t.beginPath();
        t.moveTo(110, 160);
        t.lineTo(153, 100);
        t.lineTo(196, 160);
        t.closePath();
        t.stroke();
        t.fill();
        t.beginPath();
        t.moveTo(120, 120);
        t.lineTo(153, 60);
        t.lineTo(186, 120);
        t.closePath();
        t.stroke();
        t.fill();

        // JÕULUTÄHT //chat gpt
        t.fillStyle = "yellow";
        t.beginPath();
        let cx = 153, cy = 55, outer = 12, inner = 5;
        for (let i = 0; i < 5; i++) {
            let angle = i * 2 * Math.PI / 5 - Math.PI / 2;
            let x = cx + Math.cos(angle) * outer;
            let y = cy + Math.sin(angle) * outer;
            t.lineTo(x, y);
            angle += Math.PI / 5;
            x = cx + Math.cos(angle) * inner;
            y = cy + Math.sin(angle) * inner;
            t.lineTo(x, y);
        }
        t.closePath();
        t.fill();
        t.stroke();
    }
}
//lumememmel on tehtud nägu, ja käed chat gpt
function ring() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");


        let x = 245;


        let rAlumine = 25;
        let rKeskmine = 20;
        let rPea = 14;


        let tahvliKorgus = 250;
        let yAlumine = tahvliKorgus - rAlumine;
        let yKeskmine = yAlumine - rAlumine - rKeskmine;
        let yPea = yKeskmine - rKeskmine - rPea;


        t.fillStyle = "white";
        t.strokeStyle = "black";

        t.beginPath();
        t.arc(x, yAlumine, rAlumine, 0, 2 * Math.PI);
        t.fill();
        t.stroke();

        t.beginPath();
        t.arc(x, yKeskmine, rKeskmine, 0, 2 * Math.PI);
        t.fill();
        t.stroke();

        t.beginPath();
        t.arc(x, yPea, rPea, 0, 2 * Math.PI);
        t.fill();
        t.stroke();


        t.fillStyle = "black";
        t.beginPath();
        t.arc(x - 4, yPea - 3, 2, 0, 2 * Math.PI);
        t.arc(x + 4, yPea - 3, 2, 0, 2 * Math.PI);
        t.fill();


        t.fillStyle = "orange";
        t.beginPath();
        t.moveTo(x, yPea);
        t.lineTo(x + 12, yPea + 2);
        t.lineTo(x, yPea + 5);
        t.closePath();
        t.fill();

        // ===== SUU =====
        t.strokeStyle = "black";
        t.beginPath();
        t.arc(x, yPea + 5, 6, 0, Math.PI);
        t.stroke();


        t.beginPath();
        t.moveTo(x - rKeskmine, yKeskmine);
        t.lineTo(x - 55, yKeskmine - 12);

        t.moveTo(x + rKeskmine, yKeskmine);
        t.lineTo(x + 55, yKeskmine - 12);
        t.stroke();
    }
}


let canvas;
let ctx;

let x = [50, 100, 150, 200, 250];
let y = [0, 40, 80, 120, 160];

let timer = null;

// SALVESTAME TAUSTA
let taust;

function alustaLumi() {
    canvas = document.getElementById("tahvel");
    ctx = canvas.getContext("2d");

    if (timer !== null) return;

    // salvesta olemasolev pilt
    taust = ctx.getImageData(0, 0, canvas.width, canvas.height);

    timer = setInterval(lumi, 80);
}

function lumi() {
    // taasta taust
    ctx.putImageData(taust, 0, 0);

    ctx.fillStyle = "white";

    for (let i = 0; i < x.length; i++) {
        ctx.beginPath();
        ctx.arc(x[i], y[i], 4, 0, Math.PI * 2);
        ctx.fill();

        // liigub alla
        y[i] += 3;

        // ❄️ külgliikumine ALLES pärast natuke kukkumist
        if (y[i] > 20) {
            x[i] += Math.random() - 0.5;
        }

        if (y[i] > canvas.height) {
            y[i] = 0;
            x[i] = Math.random() * canvas.width;
        }
    }
}



function kingitused() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        // Funktsioon ühe kingituse joonistamiseks
        function joonistaKingitus(x, y, kastV, kastK, varv, lintVarv) {
            // kast
            t.fillStyle = varv;
            t.fillRect(x, y, kastV, kastK);

            // lint vertikaalne
            t.fillStyle = lintVarv;
            t.fillRect(x + kastV/2 - 3, y, 6, kastK);

            // lint horisontaalne
            t.fillRect(x, y + kastK/2 - 3, kastV, 6);

            // lips ülaosas (väike kolmnurk)
            t.beginPath();
            t.moveTo(x + kastV/2, y);
            t.lineTo(x + kastV/2 - 7, y - 10);
            t.lineTo(x + kastV/2 + 7, y - 10);
            t.closePath();
            t.fill();
        }

        const kastV = 40;
        const kastK = 30;
        const yMaaPeal = 220; // kõik kingitused maa peal

        // Alumised kaks kingitust
        joonistaKingitus(40, yMaaPeal, kastV, kastK, "red", "yellow");
        joonistaKingitus(90, yMaaPeal, kastV, kastK, "green", "orange");

        // Ülemine kingitus nende peal
        joonistaKingitus(65, yMaaPeal - kastK - 5, kastV, kastK, "blue", "pink");
    }
}


