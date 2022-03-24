function toggleMenu() {
    tratarMenu();
    tratarLinhasMenu();
}

function tratarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function tratarLinhasMenu() {
    const linhas = document.getElementsByClassName('linha');
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btnMobile = document.getElementById('btn-mobile');
    btnMobile.addEventListener('click', toggleMenu);  
});

