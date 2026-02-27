document.addEventListener('DOMContentLoaded', () => {
    lagRuter();

    let gjettListe = [[]]
    let ledigPlass = 1;
    
    function lagRuter() {
        const container = document.getElementById("container");
        
        for (let i = 0; i < 30; i++) {
            let rute = document.createElement("input");
            rute.classList.add("rute");
            // rute.setAttribute("id", i + 1);
            rute.setAttribute("type", "text")
            rute.setAttribute("onkeydown", "handleKeyPress(event)")
            container.appendChild(rute);
            
        }
    }

    function handleKeyPress(event) {
            if (event.key === 'Enter') {
                
            }
        }


    // const allTaster = document.querySelectorAll(".keyboard-rad button");
    
    // for (let i = 0; i < allTaster.length; i++) {
    //     allTaster[i].onclick = ({target}) =>{
    //         const bokstav = target.getAttribute("data-key");

    //         console.log(bokstav)
    //         sjekkGjett(bokstav)
    //     }
    
    // }


    // function getCurrentWordArr(){
    //    const antallGjett = gjettListe.length
    //    return gjettListe[antallGjett - 1]
    // }
    // function sjekkGjett(bokstav){
    //     const currentWordArr = getCurrentWordArr

    //     if (currentWordArr && currentWordArr.lengt < 5){
    //         currentWordArr.push(bokstav)

    //         const ledigPlassElm = document.getElementById(String(1))
    //         ledigPlass += 1

    //         ledigPlassElm.textContent = bokstav;
    //     }

    // }
}); 

