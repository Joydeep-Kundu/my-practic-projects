const home = document.querySelector("#sc1");
const skill = document.querySelector("#sc2");
const work = document.querySelector("#sc3");
const contact = document.querySelector("#sc4");
const h = document.querySelector("#link1");
const s = document.querySelector("#link2");
const w = document.querySelector("#link3");
const c = document.querySelector("#link4")
h.addEventListener("click", () => {
    home.style.display = "flex";
    skill.style.display = "none";
    work.style.display = "none";
    contact.style.display = "none";
});
s.addEventListener("click", () => {
    home.style.display = "none";
    skill.style.display = "flex";
    work.style.display = "none";
    contact.style.display = "none";
});
w.addEventListener("click", () => {
    home.style.display = "none";
    skill.style.display = "none";
    work.style.display = "flex";
    contact.style.display = "none";
});
c.addEventListener("click", () => {
    home.style.display = "none";
    skill.style.display = "none";
    work.style.display = "none";
    contact.style.display = "flex";
});