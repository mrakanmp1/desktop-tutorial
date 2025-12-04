// ==========================
// Navigasi Halaman
// ==========================
const nextBtn = document.getElementById("nextBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

nextBtn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "block";
});

// ==========================
// Tombol Menghindar (Anti numpuk)
// ==========================
const noBtn = document.getElementById("noBtn");
const iyaBtn = document.getElementById("iyaBtn");

noBtn.addEventListener("mouseover", () => {

    const areaWidth = window.innerWidth - noBtn.offsetWidth;
    const areaHeight = window.innerHeight - noBtn.offsetHeight;

    let newX = Math.random() * areaWidth;
    let newY = Math.random() * areaHeight;

    const iyaRect = iyaBtn.getBoundingClientRect();
    const buffer = 120; // jarak aman supaya tidak numpuk

    if (
        newX > iyaRect.left - buffer &&
        newX < iyaRect.right + buffer &&
        newY > iyaRect.top - buffer &&
        newY < iyaRect.bottom + buffer
    ) {
        newX = iyaRect.right + buffer;
        newY = iyaRect.bottom + buffer;
    }

    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});

// ==========================
// Saat tombol IYA diklik → pindah ke halaman jawaban
// ==========================
iyaBtn.addEventListener("click", () => {
    window.location.href = "jawaban.html";
});

// ==========================
// Musik
// ==========================
const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_3efc18d3c2.mp3?filename=romantic-music-110997.mp3");
audio.loop = true;
audio.volume = 0.5;
audio.play();

// ==========================
// Hati Beterbangan
// ==========================
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);
