//gérer une ecoute sur evenement de fonction global
document.addEventListener("DOMContentLoaded", function() {

    //selectionner l'element HTML avec ID
    const color1 = document.getElementById("color-box");
    const changeColor = document.getElementById("change-color-btn");
    
    //fonction qui gerer un couleur au hazard
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    //gerer une evenement en ecoute
    changeColor.addEventListener("click", function() {

        //mise à jour le coulour avec couleur au hazrd
        color1.style.backgroundColor = getRandomColor();
    });
});
