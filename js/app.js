// *** scroll to top ***
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".btn-scrollup");
    scroll.classList.toggle("active", window.scrollY > 200);
});
// scroll to top
const btn = document.querySelector(".btn-scrollup");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
