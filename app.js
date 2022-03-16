const navBar = document.querySelector("#navBar")
const icon = document.querySelector(".fa-bars")


icon.addEventListener('click', togglebtn)

function togglebtn() {
    navBar.classList.toggle('hidemenu')
}