function init() {
    preencherFooter();   
}

function preencherFooter() {
    const footerText = document.getElementById('texto-footer');
    const date = new Date();
    footerText.innerHTML = `Todos os Direitos Reservados © ${date.getFullYear()} |<b> OAB/SP 443.659 </b>| Site criado por <a href="https://luizcamargo.dev" target="blank">Luiz Camargo</a>`;
}

function virarCard (card) {
    card.classList.toggle('active-card');
}