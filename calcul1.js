window.addEventListener("DOMContentLoaded", () => {
    const screens = document.querySelector('.ecran')
    const numeric = document.querySelectorAll(".touches");

    for (const button of numeric) {
        button.addEventListener('click', () => {
            if (button.innerText === '<') {
                screens.textContent  = screens.textContent .slice(0, screens.textContent .length - 1)
            }
            else if (button.innerText === '=') {
                screens.textContent  = eval(screens.textContent )
            }
            else if (button.innerText === 'C') {
                screens.textContent  = "";
            }
            else {
                screens.textContent  += button.innerText;
            }
        })
    }

})

//<input type="button> avec la propriété value et button avc textContent