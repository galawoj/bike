function preloader(){
    console.log("hi")
document.querySelector("body").classList.remove("cut")


}

document.querySelector("#menu_button").addEventListener("click", () => { document.querySelector("body").classList.add("is-menu-visible") })
document.querySelector(".close").addEventListener("click", () => { document.querySelector("body").classList.remove("is-menu-visible") })




document.querySelector("#menu").addEventListener("click", (e) => {
    
    if (e.target.nodeName === "NAV") {
        
        document.querySelector("body").classList.remove("is-menu-visible")
    }

})

document.addEventListener("scroll", () => {

    let positionBanner = document.querySelector("#banner").getBoundingClientRect().bottom
console.log(positionBanner)

    if (positionBanner <= 50) {
        document.querySelector("#header").classList.remove("alt")
    } else {
        document.querySelector("#header").classList.add("alt")
    }

})

document.querySelector(".modal").addEventListener("click",()=>{
    document.querySelector(".modal").classList.remove("visible")
    document.querySelector(".modal img").src=""
})




