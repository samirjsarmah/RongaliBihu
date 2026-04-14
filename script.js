/* ───────────── 1. REAL INSTRUMENT AUDIO ───────────── */

function playSound(type) {
let audio;

if (type === "dhol")   audio = document.getElementById("dholSound");
if (type === "pepa")   audio = document.getElementById("pepaSound");
if (type === "japi")   audio = document.getElementById("japiSound");
if (type === "gamusa") audio = document.getElementById("gamusaSound");

if (audio) {
audio.currentTime = 0;
audio.play().catch(() => {});
}

// animation (keep your effect)
const btn = document.getElementById(`icon-${type}`);
const ripple = document.getElementById(`ripple-${type}`);

if (btn) {
btn.classList.remove('playing');
void btn.offsetWidth;
btn.classList.add('playing');
setTimeout(() => btn.classList.remove('playing'), 500);
}

if (ripple) {
ripple.classList.remove('animate');
void ripple.offsetWidth;
ripple.classList.add('animate');
setTimeout(() => ripple.classList.remove('animate'), 700);
}
}

/* ───────────── 2. BIHU DAY ───────────── */

const BIHU_DAYS = {
'4-14': { en: "৩০ চ'ত", as: 'গৰু বিহু', emoji: '🐄' },
'4-15': { en: "১ ব'হাগ", as: 'মানুহ বিহু', emoji: '👨‍👩‍👧‍👦' },
'4-16': { en: "২ ব'হাগ", as: 'গোসাঁই বিহু', emoji: '🛕' },
'4-17': { en: "৩ ব'হাগ", as: 'চেৰা বিহু', emoji: '🥬' },
};

function getBihuDay() {
const now = new Date();
const key = `${now.getMonth()+1}-${now.getDate()}`;
return BIHU_DAYS[key] || {
en: "Rongali Bihu",
as: "ৰঙালী বিহু",
emoji: "🌸"
};
}

const bihu = getBihuDay();

window.onload = () => {
document.getElementById("dayBadge").innerText =
`${bihu.emoji} ${bihu.en} — ${bihu.as}`;
};

/* ───────────── 3. BACKGROUND MUSIC ───────────── */

function startMusic() {
const audio = document.getElementById("bihusong");
if (!audio) return;

audio.currentTime = 0;
audio.play().catch(() => {});
}

/* ───────────── 4. WISH GENERATOR ───────────── */

function generateWish() {
const name = document.getElementById("userName").value.trim();

if (!name) {
alert("Enter your name");
return;
}

// 🎵 PLAY MUSIC ON BUTTON CLICK
startMusic();

const wishAs = `${bihu.emoji} ${bihu.as}ৰ ওলগ জনাইছোঁ, ${name}!
আপোনাৰ জীৱনত সুখ, শান্তি আৰু সমৃদ্ধি আহক।
বিহু বিহু বুলি বিহু আহিল…`;

const wishEn = `Happy ${bihu.as}, ${name}!
May joy, peace and prosperity fill your life.
Bihu blessings to you and your family!`;

const wishFrom = `—`;

document.getElementById("wishAssamese").innerText = wishAs;
document.getElementById("wishEnglish").innerText = wishEn;
document.getElementById("wishFrom").innerText = wishFrom;

document.getElementById("wishCard").classList.add("visible");
}

/* ───────────── 5. COPY FUNCTION ───────────── */

function copyWish() {
const text =
document.getElementById('wishAssamese').innerText +
"\n\n" +
document.getElementById('wishEnglish').innerText;

navigator.clipboard.writeText(text).then(() => {
alert("Copied!");
});
}

/* ───────────── 6. CALENDAR ───────────── */

function openCalendar() {
window.open(
"https://drive.google.com/file/d/11s5aaHDscetGm8IcpQ7RzZjul2tcAuIC/view",
"_blank"
);
}
