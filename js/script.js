const carousalItems = document.querySelectorAll(".item")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
    // ------------------------------------------------------------------------------------------------------------------------------
    // scroll lists   - HEADER

const categories = document.getElementById("categories")
const more = document.getElementById("more")
const scrollCatagories = document.querySelector(".scroll-list-categorie")
const scrollMore = document.querySelector(".scroll-list-more")
const carousal = document.querySelector(".carousal")

categories.addEventListener("mouseenter", function() {
    scrollCatagories.classList.add("show")
})
categories.addEventListener("mouseout", function() {
    scrollCatagories.classList.remove("show")
})

more.addEventListener("click", function() {
    scrollMore.classList.toggle("show")
})

// ------------------------------------------------------------------------------------------------------------------------------

// Adding events to buttons   - SECTION
let slidePosition = 0;
let totalsliders = carousalItems.length

const dots = document.querySelectorAll(".dot")

prevBtn.addEventListener("click", () => {
    previous();
})
nextBtn.addEventListener("click", () => {
    next();
})

function upadteposition() {

    carousalItems.forEach((slide, ind) => {
            // apply all values
            slide.classList.remove("active")
            slide.classList.add("hidden")
        })
        //          [0].active adding
    carousalItems[slidePosition].classList.add("active")

    // dots
    dots.forEach((dot) => {
        dot.classList.remove("dot-active")
    })

    dots[slidePosition].classList.add("dot-active")

}
// dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        slidePosition = index
        upadteposition();
    })
})

function previous() {

    upadteposition();

    if (slidePosition == 0) {
        slidePosition = totalsliders - 1;
    } else {
        slidePosition--;
    }
}

function next() {

    upadteposition();

    if (slidePosition == totalsliders - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}
// ------------------------------------------------------------------------------------------------------------------------------

// Automatic slider

const Interval = setInterval(() => {
    upadteposition();
    next();
}, 3000);

// ------------------------------------------------------------------------------------------------------------------------------








// const section5 = document.querySelector(".full-img")
// const contentitem = document.querySelectorAll(".contentitem")


// section5.addEventListener("mouseenter", () => {
//     contentposition();
//     item++;
// })

// let item = 0;
// let contentitemLength = contentitem.length

// function contentposition() {
//     contentitem.forEach((item, ind) => {
//         item.classList.remove("active")
//     })
//     contentitem[item].classList.add("hidden")
// }

// // let contentInterval = setInterval(() => {
// //     contentposition();
// //     contentnext()
// // }, 1000);


// let contenttimeout = setTimeout(() => {
//     clearInterval(contentInterval)
// }, 2000);