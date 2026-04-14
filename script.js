/**
 * ═══════════════════════════════════════════════════════
 *  RONGALI BIHU WISHES — FINAL script.js
 * ═══════════════════════════════════════════════════════
 */

/* ───────────── 1. BIHU DAY DETECTION ───────────── */

const BIHU_DAYS = {
  '4-14': { en: "৩০ চ'ত ", as: 'গৰু বিহু', emoji: '🐄' },
  '4-15': { en: '১ বহাগ', as: 'মানুহ বিহু', emoji: '👨‍👩‍👧‍👦' },
  '4-16': { en: '২ বহাগ', as: 'গোসাঁই বিহু', emoji: '🛕' },
  '4-17': { en: '৩ বহাগ', as: 'চেৰা বিহু', emoji: '🌟' },
};

function getBihuDay() {
  const now = new Date();
  const key = `${now.getMonth() + 1}-${now.getDate()}`;
  return BIHU_DAYS[key] || {
    en: 'Rongali Bihu',
    as: 'ৰঙালী বিহু',
    emoji: '🌸',
  };
}

/* ───────────── 2. WISH GENERATOR ───────────── */

function buildWish(bihu, name, sender) {
  return {
    assamese: `${bihu.emoji} ${bihu.as}ৰ ওলগ জনাইছোঁ, ${name}!
আপোনাৰ জীৱনত সুখ, শান্তি আৰু সমৃদ্ধি আহক।`,
    english: `Happy ${bihu.en}, ${name}! 
Wishing you joy, happiness and prosperity.`,
    from: `— ${sender}`,
  };
}

/* ───────────── INIT ───────────── */

const bihu = getBihuDay();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dayBadge').textContent =
    `${bihu.emoji} ${bihu.en} — ${bihu.as}`;
});

/* ───────────── 3. GENERATE WISH ───────────── */

const SENDER = '';

function generateWish() {
  const name = document.getElementById('userName').value.trim();
  if (!name) return;

  const wish = buildWish(bihu, name, SENDER);

  document.getElementById('wishAssamese').textContent = wish.assamese;
  document.getElementById('wishEnglish').textContent = wish.english;
  document.getElementById('wishFrom').textContent = wish.from;

  document.getElementById('wishCard').classList.add('visible');

  launchConfetti();
  startMusic();
}

/* ───────────── 4. COPY ───────────── */

function copyWish() {
  const text =
    document.getElementById('wishAssamese').textContent +
    "\n\n" +
    document.getElementById('wishEnglish').textContent;

  navigator.clipboard.writeText(text);
  alert("Copied!");
}

/* ───────────── 5. CONFETTI ───────────── */

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function launchConfetti() {
  particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: 0,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 3 + 2,
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.fillStyle = "red";
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
  });

  requestAnimationFrame(animateConfetti);
}

/* ───────────── 6. REAL MUSIC 🎵 ───────────── */

let isPlaying = false;

function startMusic() {
  const audio = document.getElementById('bihusong');
  audio.play();
  isPlaying = true;
  document.getElementById('musicBtn').textContent = '⏸';
}

function stopMusic() {
  const audio = document.getElementById('bihusong');
  audio.pause();
  isPlaying = false;
  document.getElementById('musicBtn').textContent = '▶';
}

function toggleMusic() {
  if (isPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}

function openCalendar() {
  window.open(
    "https://drive.google.com/file/d/11s5aaHDscetGm8IcpQ7RzZjul2tcAuIC/view",
    "_blank"
  );
}

function toggleCalendar() {
  const cal = document.getElementById('calendarContainer');
  cal.classList.toggle('show');
}