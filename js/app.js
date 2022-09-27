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
// *** cookie modal ***
let cookieModal = document.querySelector("#cookieModal");
let acceptCookie = document.querySelector("#acceptCookie");
let cancelCookie = document.querySelector("#refusedCookie");
//
cancelCookie.addEventListener("click", function () {
    cookieModal.classList.remove("active");
});
//
acceptCookie.addEventListener("click", function () {
    cookieModal.classList.remove("active");
    localStorage.setItem("cookieAccepted", "yes");
});

setTimeout(function () {
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    if(cookieAccepted != 'yes'){
        cookieModal.classList.add("active");
    }
}, 2000);
