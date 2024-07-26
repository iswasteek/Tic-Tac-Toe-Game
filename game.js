let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turno = true; // player tracking, whose turn
let winningpattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];



boxes.forEach((box) => {
    box.addEventListener("click", ( ) => {
        console.log("box was clicked");
  

    if (turno) {
        box.innerText = "O";
        turno = false;
    }
    else {
        box.innerText = "X";
        turno = true;
    }
    box.disabled = true;

    checkWinner();
       
}); 
});

const resetgame = () => {
    turno = true;
    enablebox();
    msgcontainer.classList.add("hide");
}

const disablebox = () => {
    for (box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const checkWinner = () => {
    for (pattern of winningpattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 =  boxes[pattern[1]].innerText;
        let posval3 =  boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner",posval1);
                showWinner(posval1);
            }
        }
    }
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);