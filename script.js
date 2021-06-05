// function hide_image(id) {
//     document.getElementById(id).style.display = 'none';
// }

function switchPage(id) {
    console.log("switchPage", id)
    const pages = document.getElementsByClassName("page")
    for (const page of pages) {
        page.style.display = "none"
    }
    const element = document.getElementById(id)
    element.style.display = "inherit"
}

document.addEventListener("DOMContentLoaded", function() {
    switchPage("main")
});