let sc, sc2 = 9, s = 0;
let h = document.querySelector("h2")
let bt1 = document.querySelector("#rock");
let bt2 = document.querySelector("#paper");
let bt3 = document.querySelector("#sizor");
function rdm() {
    return (sc = Math.floor(Math.random() * 3) + 1);
}
bt1.addEventListener('click', function () {
    sc2 = 1;
    rdm();
    console.log(sc, sc2);
    if (sc === sc2) {
        h.innerText = ++s;
    }
    else if (sc === 3) {
        s += 2;
        h.innerText = s
    }
    else {
        h.innerText = --s;
    }
});
bt2.addEventListener('click', function () {
    sc2 = 2;
    rdm();
    console.log(sc, sc2);
    if (sc === sc2) {
        h.innerText = ++s;
    }
    else if (sc === 1) {
        s += 2;
        h.innerText = s
    }
    else {
        h.innerText = --s;
    }
});
bt3.addEventListener('click', function () {
    sc2 = 3;
    rdm();
    console.log(sc, sc2);
    if (sc === sc2) {
        h.innerText = ++s;
    }
    else if (sc === 2) {
        s += 2;
        h.innerText = s
    }
    else {
        h.innerText = --s;
    }
});

