const correctPassword = "06042024"; 
// 🔐 CHANGE THIS TO YOUR SECRET DATE / NAME

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("mainPage").classList.remove("hidden");
    } else {
        error.innerText = "Oops 😅 Wrong password!";
    }
}

/* MUSIC */
document.body.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });

/* YES BUTTON */
document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("question").innerText = "I knew it 😘❤️";
    typeText("You unlocked my heart 💕");

    setTimeout(() => {
        document.getElementById("mainPage").style.display = "none";
        document.getElementById("finalPage").classList.add("show");
        startChat();
    }, 2500);
});

/* NO BUTTON */
document.getElementById("noBtn").addEventListener("mouseover", () => {
    const btn = document.getElementById("noBtn");
    btn.style.transform = `translate(${Math.random()*300-150}px,${Math.random()*300-150}px)`;
});

/* TYPE EFFECT */
function typeText(text) {
    const msg = document.getElementById("message");
    msg.innerHTML = "";
    let i = 0;
    const t = setInterval(() => {
        msg.innerHTML += text.charAt(i++);
        if (i === text.length) clearInterval(t);
    }, 60);
}

/* CHAT ANIMATION */
function startChat() {
    document.querySelectorAll(".msg").forEach((m, i) => {
        m.style.animationDelay = `${i * 1.2}s`;
    });
}

/* SLIDESHOW */
const slides = ["photos/p1.jpg","photos/p2.jpg","photos/p3.jpeg"];
let i = 0;
setInterval(() => {
    document.getElementById("slideImg").src = slides[i = (i+1)%slides.length];
}, 3000);

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let parts = [];

function boom() {
    for (let i = 0; i < 30; i++) {
        parts.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height/2,
            vx: Math.random()*6-3,
            vy: Math.random()*6-3,
            life: 40
        });
    }
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (Math.random()<0.05) boom();
    parts.forEach((p,i)=>{
        p.x+=p.vx; p.y+=p.vy; p.life--;
        ctx.fillStyle="pink";
        ctx.fillRect(p.x,p.y,2,2);
        if(p.life<=0) parts.splice(i,1);
    });
    requestAnimationFrame(animate);
}
animate();
