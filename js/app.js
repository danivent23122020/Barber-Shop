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
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "Barbershop=true; expires = ' + d + ';";
    cookieModal.classList.remove("active");
});

// check cookie exist
const checkCookie = () => {
    let input = document.cookie.split("=");
    if (input[0] == "Barbershop") {
        cookieModal.classList.remove("active");
    } else {
        cookieModal.classList.add("active");
    }
};
// check cookie exist page already load
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 1000);
};
//
// test date
let dateJour = Date.now();
console.log(dateJour);
console.log(dateJour / (1000 * 3600 * 24));

function diffJoursDates(firstdate, seconddate) {
    return (seconddate - firstdate) / (1000 * 3600 * 24);
}
let numDiff = diffJoursDates(new Date(2022, 09, 01), new Date(2022, 09, 27));
console.log(numDiff);

//
const ladate = new Date();
console.log("Nous sommes le : ");
console.log(
    ladate.getDate() +
        "/" +
        (ladate.getMonth() + 1) +
        "/" +
        ladate.getFullYear()
);
