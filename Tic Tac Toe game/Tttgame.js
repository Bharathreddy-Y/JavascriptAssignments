const boxes = Array.from(document.getElementsByClassName("box"));
// console.log(boxes)
const spaces = [];
const play_Text = document.getElementById("play-text");
const restart_btn = document.getElementById("restart-btn")
const O = "0";
const X = "X"
let currentPlayer = O;



const board=()=>{
    boxes.forEach((box,index)=>{
        // console.log(index)
        let boxBorderStyle = "";
        if(index < 3)
        {
            boxBorderStyle += `border-bottom: 3px solid black;`;
        }
        if(index % 3 === 0)
        {
            boxBorderStyle += `border-right: 3px solid black;`;
        }
        if(index % 3 === 2)
        {
            boxBorderStyle += `border-left: 3px solid black;`;
        }
        if((index >5))
        {
            boxBorderStyle += `border-top: 3px solid black;`;
        }
        box.style = boxBorderStyle;
        box.addEventListener('click', boxClicked);
    });
};

const boxClicked=(e)=>{
    const id  = e.target.id
    // console.log(spaces[id])
    if(!spaces[id])
    {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerWon())
        {
            play_Text.innerText = `${currentPlayer} has Won...!`
            return;
        }
        currentPlayer = currentPlayer === O ? X : O;
    }
}
const playerWon=()=>{
    if(spaces[0] === currentPlayer)
    {
        if(spaces[1] === currentPlayer && spaces[2]===currentPlayer)
        {
            return currentPlayer;
        }
        if(spaces[4] === currentPlayer && spaces[8]===currentPlayer)
        {
            return currentPlayer;
        }
        if(spaces[3] === currentPlayer && spaces[6]===currentPlayer)
        {
            return currentPlayer;
        }
    }
    if(spaces[8] === currentPlayer)
    {
        if(spaces[5] === currentPlayer && spaces[2]===currentPlayer)
        {
            return currentPlayer
        }
        if(spaces[7] === currentPlayer && spaces[6]===currentPlayer)
        {
            return currentPlayer
        }
    }
    if(spaces[1] === currentPlayer)
    {
        if(spaces[4] === currentPlayer && spaces[7] === currentPlayer)
        {
            return currentPlayer
        }
    }
    if(spaces[3] === currentPlayer)
    {
        if(spaces[4] === currentPlayer && spaces[5] === currentPlayer)
        {
            return currentPlayer
        }
    }
    if(spaces[2] === currentPlayer)
    {
        if(spaces[4] === currentPlayer && spaces[6] === currentPlayer)
        {
            return currentPlayer
        }
    }
}
const restart=()=>{
    // restart_btn.style.transform= "scale(1)";
    spaces.forEach((space,index)=>{
        spaces[index]=null;
    });
    boxes.forEach((box)=>{
        box.innerText = '';
    });
    play_Text.innerText = `Let's Play`;
    currentPlayer = O;
};
restart_btn.addEventListener('click',restart)
restart();
board();