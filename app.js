const cross = document.getElementById("cross");
const burger = document.getElementById("hamburger");
const nav = document.getElementsByTagName("nav")[0];

nav.addEventListener("click", (e) => {
    e.stopPropagation()
})

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.add("toRight");
});

cross.addEventListener("click", () => {
    nav.classList.remove("toRight");
});

window.addEventListener("click", () => {
    nav.classList.remove("toRight");
});
