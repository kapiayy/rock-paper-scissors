
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


function getHumanChoice(){
    let humanChoice = prompt(`Choose`).toLowerCase()
    
    
    switch(humanChoice){
        case `rock`:
            return 'rock';
        case `paper`:
            return 'paper'
        case `scissors`:
            return 'scissors'
    }
}






function playGame(){
    let humanScore = 0
    let computerScore = 0
    for(let i = 0; i < 5 ; i++){
        
        function playRound(HumanChoice,ComputerChoice){
    if(HumanChoice == `rock` && ComputerChoice == `paper`){ // human rock cpu paper
        console.log('You lost!')
        computerScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)

    }else if(HumanChoice == `paper` && ComputerChoice == `scissors`){ //human paper cpu scissors
        console.log('You lost!')
        computerScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore) 

    }else if(HumanChoice == `scissors` && ComputerChoice == `rock`){ // human scissors cpu rock
        console.log('You lost!')
        computerScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)
    }else if(HumanChoice == `rock` && ComputerChoice == `scissors`){ //human rock cpu scissors
        console.log('You Won!')
        humanScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)

    }else if(HumanChoice == `paper` && ComputerChoice == `rock`){ //human paper cpu rock
        console.log('You Won!')
        humanScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)

    }else if(HumanChoice == `scissors` && ComputerChoice == `paper`){ //human scissors cpu paper
        console.log('You Won!')
        humanScore += 1
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)
    }else if(HumanChoice === ComputerChoice){
        console.log('Tie!')
        console.log(`YOU =` + humanScore,`CPU =` + computerScore)
            }
        }console.log(playRound(getHumanChoice(),getComputerChoice()))
    }
}





console.log(playGame())