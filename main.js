const nav = document.querySelector(".nav");
const scrollTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
    nav.classList.toggle("active", window.scrollY > 40);
})

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("active", window.scrollY > 200);
})

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
