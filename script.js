
function getComputerChoice(){
    let computerChoice = Math.floor((Math.random()* 3)+1)
    
    switch(computerChoice){
        case 1:   
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        
    }
    
}


function getHumanChoice(humanChoice){
    switch(humanChoice){
        case `rock`:
            return 'rock';
        case `paper`:
            return 'paper'
        case `scissors`:
            return 'scissors'
    }
}

let humanScore = 0
let computerScore = 0

function playRound(HumanChoice,ComputerChoice){
    
    if(HumanChoice == `rock` && ComputerChoice == `paper`){ // human rock cpu paper
        
        computerScore += 1
        showResult

    }else if(HumanChoice == `paper` && ComputerChoice == `scissors`){ //human paper cpu scissors
        
        computerScore += 1
        showResult()
    }else if(HumanChoice == `scissors` && ComputerChoice == `rock`){ // human scissors cpu rock
        
        computerScore += 1
        showResult()
    }else if(HumanChoice == `rock` && ComputerChoice == `scissors`){ //human rock cpu scissors    
        humanScore += 1
        showResult()
    }else if(HumanChoice == `paper` && ComputerChoice == `rock`){ //human paper cpu rock
        humanScore += 1
        showResult()
    }else if(HumanChoice == `scissors` && ComputerChoice == `paper`){ //human scissors cpu paper
        humanScore += 1
        showResult()
    }else if(HumanChoice === ComputerChoice){
        showResult()
        }
}






const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

rock.addEventListener("click", (playerSelection) => 
    playRound(
        getHumanChoice(playerSelection.target.textContent),getComputerChoice()))

        
paper.addEventListener("click", (playerSelection) => 
    playRound(
        getHumanChoice(playerSelection.target.textContent),getComputerChoice()))


        
scissors.addEventListener("click", (playerSelection) => 
    playRound(
        getHumanChoice(playerSelection.target.textContent),getComputerChoice()))


const body = document.querySelector("body")
const result = document.createElement("div")
const resultChild = document.createElement("span")
const winner = document.createElement("div")
const playAgain = document.createElement("button")
playAgain.textContent = 'Play Again'

playAgain.style

const choose = document.querySelector(".choose")

const buttons = document.querySelectorAll("button")


result.classList.add("result")
resultChild.classList.add("youcpu")
resultChild.textContent = "You: " + humanScore + " vs " + "CPU: " + computerScore



body.appendChild(result)
result.appendChild(resultChild)
result.appendChild(winner)
const showResult = function (){
    resultChild.textContent = "You: " + humanScore + " vs " + "CPU: " + computerScore
    if(humanScore == 5){
        winner.textContent = "You Won!"
        resultChild.textContent = ""
        while(humanScore ==5){
            choose.removeChild(choose.firstChild)
            result.appendChild(playAgain)
        }
        
    }else if(computerScore == 5){
        winner.textContent = "Computer Won!"
        resultChild.textContent = ""
        while(computerScore == 5){
            choose.removeChild(choose.firstChild)
            result.appendChild(playAgain)
    }
        }
}

playAgain.onclick =() => (choose.appendChild(rock),choose.appendChild(paper),choose.appendChild(scissors),humanScore = 0,computerScore =0,winner.textContent ='',result.removeChild(playAgain))









