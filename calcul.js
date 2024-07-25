window.addEventListener("DOMContentLoaded", function() {
    const numeric = [...document.querySelectorAll(".touches")];
    //attribut data pour recuperer les valeurs de data-keybord
    //JS element.dataset.nomDuData

    const listKeyCode = numeric.map((element) => element.dataset.keybord);
    const screens = document.querySelector('.ecran')

    document.addEventListener('keydown', (e) =>  {
        // values est un Number alors que numeric est en string 

        const values = e.keyCode.toString();
        calculate(values);
    });

    document.addEventListener("click", (e) => {
        //recuperer valeur avec click et cible avec target le HTML = values est en string

        const values = e.target.dataset.keybord;
        calculate(values);
    }) 

    const calculate = (values) => {

        if (listKeyCode.includes(values)) {
            if (values == "8") {
                screens.textContent = "";
            }
            else if (values === "60") {
                screens.textContent = screens.textContent.slice(0, -1);
            }
            else if (values == "13") {
                const calcul = eval(screens.textContent)
                screens.textContent = calcul
            }
            else {
                const indexKeycode = listKeyCode.indexOf(values)
                const touche = numeric[indexKeycode];
                screens.textContent += touche.innerHTML;

            }
        }
    }



})