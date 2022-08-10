let buttons = document.querySelectorAll('button');

function selectorGreen1(id) {
    for (let i = 0; i < 4; i++) {
        if (buttons[i].classList.toggle("border-green")){
            buttons[i].classList.toggle("border-green");
        }
    }
    document.getElementById(id).classList.toggle("border-green");
}

function selectorGreen2(id) {
    for (let i = 4; i < 9; i++) {
        if (buttons[i].classList.toggle("border-green")){
            buttons[i].classList.toggle("border-green");
        }
    }
    document.getElementById(id).classList.toggle("border-green");
}

function selectorGreen3(id) {
    for (let i = 9; i < buttons.length; i++) {
        if (buttons[i].classList.toggle("border-green")){
            buttons[i].classList.toggle("border-green");
        }
    }
    document.getElementById(id).classList.toggle("border-green");
}