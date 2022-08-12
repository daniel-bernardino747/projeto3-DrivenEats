document.getElementById("bottom-label").disabled = true;

function selector(family, classButton) {
    const selected = document.querySelector(`.${family} .border-green`);

    if (selected !== null) {
        selected.classList.remove("border-green");
    }

    const selector = "." + classButton;
    const button = document.querySelector(selector);
    button.classList.add('border-green');

    const selectedOne = document.querySelector('.first-menu .border-green');
    const selectedTwo = document.querySelector('.sec-menu .border-green');
    const selectedThree = document.querySelector('.ter-menu .border-green');

    if (selectedOne !== null && selectedTwo !== null && selectedThree !== null) {
        const FinishPurchase = document.getElementById('bottom-label');
        FinishPurchase.innerHTML = 'Fechar pedido';
        FinishPurchase.classList.add('finishPurchase');

        document.getElementById("bottom-label").disabled = false;
    }
}

function confirmOrder() {
    document.getElementById("blabla").classList.add('unhidden');
}