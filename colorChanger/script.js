const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
buttonBlack = document.querySelector("#black")
buttonRed = document.querySelector("#red")

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (event.target.id === "black") {
            body.style.backgroundColor = event.target.id
            body.style.color ="white"
            buttonBlack.style.border="1px solid white"
        }

        if (event.target.id === "blue") {
            body.style.backgroundColor = event.target.id
            body.style.color = "white"

        }

        if (event.target.id === "red") {
            body.style.backgroundColor = event.target.id
            body.style.color = "black"
            buttonBlack.style.border="2px solid black"
       
        }

        if (event.target.id === "yellow") {
            body.style.backgroundColor = event.target.id
            body.style.color = "black"
        }
    });
});
