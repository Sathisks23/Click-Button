let buttons = document.querySelectorAll("#btn")


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickMe)

    function clickMe(){

        buttons[i].classList.toggle('changeColor')


        if (buttons[i].innerText === "Click Me") {
            buttons[i].innerText = "Clicked"
            
        }
        else if (buttons[i].innerText === "Clicked") {
            buttons[i].innerText = "Click Me"
        }
    }
    


}