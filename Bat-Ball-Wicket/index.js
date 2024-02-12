let computerChoice;
    let userChoice;

    let score=JSON.parse(localStorage.getItem('score'))||
    {
        Win:0,
        Loss:0,
        Tie:0,    
}

function reset(){
    score.Win=0;
    score.Loss=0;
    score.Tie=0;
    localStorage.removeItem('score');
    displayScore();
}

displayScore();

    function ComputerChoice(){
        let x=Math.random()*3;
        if(x>=0 && x<1){
            computerChoice='Bat';
        }
        else if(x>=1&&x<2){
            computerChoice='Ball';
        }
        else{
            computerChoice='Wicket';
        }

        return computerChoice;
    }

    function playgame(userChoice){
        let result='';
        const computerChoice=ComputerChoice();
        if(userChoice==='Bat'){
           if(computerChoice==='Bat'){
            result="Tie";
            score.Tie++;
           }
           else if(computerChoice==='Ball'){
            result='Win'
            score.Win++;
           }
           else{
            result='Lose'
            score.Loss++;
           }
        }
        else if(userChoice==='Ball'){
            if(computerChoice==='Bat'){
                result='Win'
                score.Win++
            }
            else if(computerChoice==="Ball"){
                result="Tie"
                score.Tie++
            }
            else{
                result="Lose"
                score.Loss++
            }
        }
        else if(userChoice==="Wicket"){
            if(computerChoice==="Bat"){
                result="Win";
                score.Win++
            }
            else if(computerChoice==="Ball"){
                result="Lose";
                score.Loss++
            }
            else{
                result="Tie"
                score.Tie++
            }
        }
        localStorage.setItem('score',JSON.stringify(score));

        document.querySelector("#computerChoice").innerHTML=`Computer Choice: ${computerChoice}`;
        document.querySelector("#userChoice").innerHTML=`User Choice: ${userChoice}`;
        document.querySelector("#result").innerHTML=result;
       displayScore();
    }
    function  displayScore() {
        document.querySelector("#score").innerHTML = `Win: ${score.Win}  Loss: ${score.Loss}  Tie: ${score.Tie}`
    }