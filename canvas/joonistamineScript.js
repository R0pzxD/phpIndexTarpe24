
function puhasta() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, 300, 250);
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
// Snowfall Animation
let isSnowing = false;
let snowflakes = [];
let animationId;

// Snowflake class
class Snowflake {
    constructor() {
        this.x = Math.random() * 300;
        this.y = Math.random() * -100;
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.drift = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y += this.speed;
        this.x += this.drift;

        // Reset snowflake when it goes off screen
        if (this.y > 250) {
            this.y = -10;
            this.x = Math.random() * 300;
        }

        if (this.x > 300) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 300;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

// Initialize canvas
function initCanvas() {
    let canvas = document.getElementById('snowCanvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'snowCanvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);
    }

    canvas.width = 300;
    canvas.height = 250;

    return canvas;
}

// Animation loop
function animate() {
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw(ctx);
    });

    if (isSnowing) {
        animationId = requestAnimationFrame(animate);
    }
}

// Toggle snowfall
function toggleSnow() {
    isSnowing = !isSnowing;

    if (isSnowing) {
        const canvas = initCanvas();

        // Create snowflakes
        snowflakes = [];
        for (let i = 0; i < 50; i++) {
            snowflakes.push(new Snowflake());
        }

        animate();
    } else {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        const canvas = document.getElementById('snowCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}









