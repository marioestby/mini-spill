document.addEventListener('DOMContentLoaded', () => {
    lagRuter();
    const ordliste = [
        "light", "chair", "bread", "storm", "plant",
        "smile", "blood", "clean", "floor", "grass",
        "heart", "knife", "lemon", "money", "night",
        "ocean", "peace", "river", "sugar", "tiger",
        "angel", "beach", "brain", "brick", "chess",
        "child", "lover", "clock", "cloud", "coast",
        "cream", "dance", "death", "dream", "dress",
        "drink", "earth", "faith", "fault", "feast",
        "field", "fifth", "first", "flame", "flash",
        "float", "flour", "force", "frost", "fruit"
    ];
    const fasit = ordliste[Math.floor(Math.random() * ordliste.length)];

    console.log(fasit)

    const alleRuter = document.querySelectorAll(".rute");
    alleRuter[0].focus();

    function lagRuter() {
        const container = document.getElementById("container");

        for (let i = 0; i < 30; i++) {
            let rute = document.createElement("input");
            rute.classList.add("rute");
            rute.setAttribute("type", "text");
            rute.setAttribute("maxlength", "1");
            container.appendChild(rute);
        }

    }


    alleRuter.forEach((rute, index) => {
        rute.addEventListener("keydown", (event) => {
            if (event.key == "Enter") {
                if ((index + 1) % 5 == 0) {
                    console.log("Brukeren har gjettet et ord, og er på rute", index + 1)
                    sjekkGjett(index)
                }
                else {
                    const nesteRute = alleRuter[index + 1];
                    if (nesteRute) nesteRute.focus();
                }
            }
            if (event.key == "Backspace") {
                if (alleRuter[index].value === "") {
                    event.preventDefault();
                    const forrigeRute = alleRuter[index - 1];
                    if (forrigeRute) forrigeRute.focus();
                }
            }
        });
    });

    function sjekkGjett(index) {
        const radNummer = Math.floor(index / 5);
        const start = radNummer * 5;

        const radensBokser = Array.from(alleRuter).slice(start, start + 5);

        const gjettOrd = radensBokser.map(boks => boks.value).join("");

        console.log("Brukeren gjettet:", gjettOrd);
        const fasitLower = fasit.toLowerCase();


        radensBokser.forEach((boks, i) => {
            const bokstav = boks.value.toLowerCase();

            if (bokstav === fasitLower[i]) {
                // Riktig bokstav, riktig plass
                boks.style.backgroundColor = "darkseagreen";
                boks.style.color = "white"
            } else if (fasitLower.includes(bokstav)) {
                // Riktig bokstav, feil plass
                boks.style.backgroundColor = "gold";
                boks.style.color = "white"
            } else {
                // Bokstaven er ikke i ordet
                boks.style.backgroundColor = "gray";
                boks.style.color = "white"
            }

            boks.setAttribute("disabled", true);

            const tast = document.querySelector(`button[data-key="${bokstav}"]`);
            if (tast) {
                if (bokstav === fasitLower[i]) {
                    tast.style.backgroundColor = "darkseagreen";
                    tast.style.color = "white";
                } else if (fasitLower.includes(bokstav) && tast.style.backgroundColor !== "darkseagreen") {
                    tast.style.backgroundColor = "gold";
                    tast.style.color = "white";
                } else if (tast.style.backgroundColor !== "darkseagreen" && tast.style.backgroundColor !== "gold") {
                    tast.style.backgroundColor = "gray";
                    tast.style.color = "white";
                }
            }

        });

        function visPopup(vant) {
            const popup = document.getElementById("popup");
            document.getElementById("popup-tittel").textContent = vant ? "🎉 Du vant!" : "😢 Du tapte!";
            document.getElementById("popup-tekst").textContent = vant ? "Bra jobba!" : `Fasiten var: ${fasit.toUpperCase()}`;
            popup.style.display = "block";
        }

        if (gjettOrd.toLowerCase() === fasitLower) {
            visPopup(true);
        } else if (radNummer === 5) {
            visPopup(false);
        } else {
            alleRuter[index + 1].focus();
        }
    }


});

