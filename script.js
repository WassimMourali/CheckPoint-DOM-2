document.addEventListener("DOMContentLoaded", function() {
    const color1 = document.getElementById("color-box");
    const changeColor = document.getElementById("change-color-btn");
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    changeColor.addEventListener("click", function() {
        color1.style.backgroundColor = getRandomColor();
    });
});
