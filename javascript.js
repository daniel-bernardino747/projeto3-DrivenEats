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
    }
}

function confirmOrder() {
    const name = prompt('Digite seu nome: ');
    const address = prompt('Digite seu endereço: ');

    document.getElementById('title-order').innerHTML = `Esse é seu pedido, ${name}?`;
    document.getElementById("confirm-order").classList.add('unhidden');

    let url = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70\n\nNome: ${name}\nEndereço: ${address}`;
    let encode = encodeURIComponent(url);
    let linke = 'https://wa.me/5548996844907?text='+encode;

    const a = document.querySelector('#link-wpp');
    a.href = linke;
    console.log(encode);
}
