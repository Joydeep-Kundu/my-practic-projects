let btn = document.querySelector("#bt");
let a, b, c;
let h2 = document.querySelector("#txt");
function color() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    h2.innerText = `rgb(${a},${b},${c})`;
    return document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
}
btn.addEventListener('click', color);

