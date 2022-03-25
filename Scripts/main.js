function init() {
    preencherFooter();   
}

function preencherFooter() {
    const footerText = document.getElementById('texto-footer');
    const date = new Date();
    footerText.innerHTML = `Todos os Direitos Reservados © ${date.getFullYear()} |<b> OAB/SP 443.659 </b>| Site criado por <a href="https://luizcamargo.dev" target="blank">Luiz Camargo</a>`;
}

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

