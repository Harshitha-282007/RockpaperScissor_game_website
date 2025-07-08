let userscore = 0 ;
let compscore = 0 ;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let us = document.querySelector("#user-score");
let cs = document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options= ["rock" , "paper","scissor"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = () =>{
    msg.innerText ="The game was draw";
    msg.style.backgroundColor ="black"
}

const showwinner = (userwin,compchoice , userchoice) => {
    if(userwin){
        msg.innerText = "You win! computer chose " + compchoice + ".You chose " + userchoice ;
        msg.style.backgroundColor = "green";
        userscore += 1 ;
        us.innerText = userscore;

    }else{
        msg.innerText ="You lose! computer chose " + compchoice + ".You chose " + userchoice ;
        msg.style.backgroundColor = "red";
        compscore += 1 ;
        cs.innerText = compscore;
    }
}
const playgame = (userchoice) =>{
    const compchoice =genCompChoice();
    console.log(compchoice);
    if (userchoice === compchoice){
        drawGame();
    }
    else{
        let userwin = true ;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true ; 
        }
        else if(userchoice==="paper"){
            userwin = compchoice === "scissor"? false :true ; 
        }
        else{
            userwin = compchoice === "rock" ? false : true ;
        }
        showwinner(userwin ,  compchoice,userchoice );
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    })
})