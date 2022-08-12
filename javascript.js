function selector(family, classButton) {
    const selected = document.querySelector(`.${family} .border-green`);
    console.log(selected)

    if (selected !== null) {
        selected.classList.remove("border-green");
    }

    const selector = "." + classButton;
    console.log(selector);
    const button = document.querySelector(selector);
    console.log(button);
    button.classList.add('border-green');

}

