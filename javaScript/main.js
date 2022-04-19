let disney = () => {
    let filmeList = document.getElementById("drop-list-filme")
    let disneyList = document.getElementById("drop-list-disney")
    let parksList = document.getElementById("drop-list-parks")
    if (disneyList.style.display === "none") {
        disneyList.style.display = "block"
        filmeList.style.display = "none"
        parksList.style.display = "none"
    } else {
        disneyList.style.display = "none"
    }
}
// ==========main
// let main = () => {
//     let disneyList = document.getElementById("drop-list-disney")
//     if (disneyList.style.display === "block") {
//         disneyList.style.display = "none"
//     } else {
//         disneyList.style.display = "none"
//     }
// }
// ========= filme
let disneyFilme = () => {
    let disneyList = document.getElementById("drop-list-disney")
    let filmeList = document.getElementById("drop-list-filme")
    let parksList = document.getElementById("drop-list-parks")
    if (filmeList.style.display === "none") {
        filmeList.style.display = "block"
        disneyList.style.display = "none"
        parksList.style.display = "none"
    } else {
        filmeList.style.display = "none"
    }
}
// ============ parks
let disneyParks = () => {
    let parksList = document.getElementById("drop-list-parks")
    if (parksList.style.display === "none") {
        parksList.style.display = "block"
    } else {
        parksList.style.display = "none"
    }
}
// =============== hamburger =================
hamburger.style.display = "none"
let menu = () => {
    let hamburger = document.getElementById("hamburger")
    if (hamburger.style.display == "none") {
        hamburger.style.display = "block"
        // hamburger.style.transform = "translateX(0%)"
        hamburger.style.animationName = "hamburgerAnimation"
    } else {
        hamburger.style.display = "none"
       

    }
}
// ==========
let hamburgerList = () => {
    let hamburger = document.getElementById("hamburger")
    if (hamburger.style.display === "block") {
        hamburger.style.display = "none"
    } else {
        hamburger.style.display = "block"
    }
}