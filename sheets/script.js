const lunElement = document.querySelector("#lun").textContent = lun;
const marElement = document.querySelector("#mar").textContent = mar;
const merElement = document.querySelector("#mer").textContent = mer;
const gioElement = document.querySelector("#gio").textContent = gio;
const venElement = document.querySelector("#ven").textContent = ven;
const sabElement = document.querySelector("#sab").textContent = sab;
const domElement = document.querySelector("#dom").textContent = dom;

const openBtn = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});