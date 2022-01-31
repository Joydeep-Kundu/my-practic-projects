// let bt1 = document.querySelector("#hello");
// let bt2 = document.querySelector("#goodbye");
// bt1.addEventListener("click", () => (console.log("hello")));
// bt2.addEventListener('click', () => (console.log("goodbye")));
// let input = document.querySelector("input");
// input.addEventListener("keydown", (q) => console.log(q.key, q.code));
const form = document.querySelector('form');
let product = document.querySelector('#product');
let qty = document.querySelector('#qty');
let ul = document.querySelector("ul");
form.addEventListener("submit", (q) => {
    event.preventDefault();
    if (product.value === "" || qty.value === "") {
        return;
    }
    let nli = document.createElement("li");
    nli.innerText = `${qty.value} ${product.value}`;
    ul.appendChild(nli);
    qty.value = "";
    product.value = "";
});