//? make the computer pick a number
let randomno= Math.ceil(Math.random()*20)
console.log(randomno);

let message = document.querySelector(".msg")

let skor = 10;
// could get the skore from html but we will use it a lot so...
let highestSkor = 0;

//? everytime the check button is clicked these will happen:
document.querySelector(".check").addEventListener("click", () => {

    const guessin = document.querySelector(".guess").value
    
    //! when button is pressed without entering a guess
    if (!guessin){
        message.textContent = "Please make a guess first."
    //! if the guess is right
    } else if (guessin == randomno){
        message.textContent = "You're right. Congratulations.👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = randomno

        //top score control will come here
        if (skor > highestSkor) {
            highestSkor = skor
            document.querySelector(".top-score").textContent= highestSkor
        } 

    } else {
    //! if it's wrong
    document.querySelector("body").style.backgroundColor = "red"
        
        //? score>1 means user can still make a guess
        if (skor > 1){
            skor -- ;
            document.querySelector(".score").textContent = skor

            guessin < randomno ? message.textContent = "Increase 👆" 
            : message.textContent = "Decrease 👇"


        } else{
            message.textContent = "You lost the game.💀"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "black"
        }

    }

})