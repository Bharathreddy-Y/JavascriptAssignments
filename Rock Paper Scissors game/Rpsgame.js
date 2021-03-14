let userValue = 0;
let compValue = 0;
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor")
const result_p = document.querySelector(".result");
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score")
const userSelect = document.querySelector(".user-selected-text");
const compSelect = document.querySelector(".comp-selected-text");

const computerChoice=()=>{
    const compChoice = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return compChoice[randomNumber];
}
const youWin=(userChoice,compChoice)=>{
    userValue=userValue+1;
    userScore_span.innerHTML = userValue;
    compScore_span.innerHTML = compValue;
    userSelect.innerHTML = `${userChoice}`;
    compSelect.innerHTML = `${compChoice}`;
    result_p.innerHTML = `${userChoice} beats ${compChoice} . You win...`;
}
const youLose =(userChoice, compChoice)=>{
    compValue=compValue+1;
    userScore_span.innerHTML = userValue;
    compScore_span.innerHTML = compValue;
    userSelect.innerHTML = `${userChoice}`;
    compSelect.innerHTML = `${compChoice}`;
    
    result_p.innerHTML = `${userChoice} lost to ${compChoice} . You Lost...`;
}
const draw = (userChoice, compChoice)=>{
    userSelect.innerHTML = `${userChoice}`;
    compSelect.innerHTML = `${compChoice}`;
    result_p.innerHTML = `${userChoice} Equal ${compChoice} . Its a draw...`;
}

Rpsgame=(userChoice)=>{
    const compChoice = computerChoice()
    const name = userChoice + compChoice;
    switch(name){
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            youWin(userChoice,compChoice)
            break;
        case "scissorrock":
        case "paperscissor":
        case "rockpaper":
            youLose(userChoice,compChoice)
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice,compChoice)
            break;
    }
}

const main =()=>{
    rock_div.addEventListener('click',()=>Rpsgame("rock"));
    paper_div.addEventListener('click',()=>Rpsgame("paper"));
    scissor_div.addEventListener('click',()=>Rpsgame("scissor"));
}
main()