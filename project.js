let gameSeq = [];
let userSeq = [];

let btns = ["pink","green","orange","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress",function () {
    if (started == false) {
        console.log("game has started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "level "+level;
    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randBtn = document.querySelector('.'+randColor);
    gameSeq.push(randColor); 
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
         if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
         }
    }else{
        h2.innerHTML = "Game Over! Your score was <b>"+level+"</b> <br></br> Press any key to start.";
        document.querySelector("body").style.background = "red";
        setTimeout(function () {
            document.querySelector("body").style.background = "white";
        },250);
        reset();
    }
}


function btnPress() {
    let btn = this;
    btnFlash(btn);
    console.log(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// function highestScore(score) {
//      if (score[] > newScore) {
//         h2.innerHTML = "Game Over! Your score was <b>"+level+"</b> <br></br> Press any key to start.<br> Your Highest Score is Level "+score;
//      }
//      else{
//         h2.innerHTML = "Game Over! Your score was <b>"+level+"</b> <br></br> Press any key to start.<br> Your Highest Score is Level "+newScore;
//      }
    
// }