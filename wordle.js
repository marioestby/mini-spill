document.addEventListener('DOMContentLoaded', () => {
    lagRuter();

    function lagRuter() {
        const container = document.getElementById("container");

        for (let i = 0; i < 30; i++) {
            let rute = document.createElement("input");
            rute.classList.add("rute");
            rute.setAttribute("type", "text");
            rute.setAttribute("maxlength", "1");
            container.appendChild(rute);
        }

        // Legg til event listeners ETTER alle ruter er laget
    }
    
    const alleRuter = container.querySelectorAll(".rute");

    alleRuter.forEach((rute, index) => {
        rute.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if ((index + 1) % 5 == 0) {
                    console.log("Brukeren har gjettet et ord, og er på rute", index + 1)
                    sjekkGjett(index)
                }
                else {
                    const nesteRute = alleRuter[index + 1];
                    if (nesteRute) nesteRute.focus();
                }
            }
        });
    });

    function sjekkGjett(index){
        
    }

});

