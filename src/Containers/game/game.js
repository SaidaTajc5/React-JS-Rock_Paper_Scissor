    import React, { Component } from 'react';
    import './game.css';
    const ROCK = 'ROCK'; 
    const PAPER ='PAPER';
    const SCISSORS= 'SCISSORS';
    const DEFAULT_USER_CHOICE= ROCK;
    const DRAW = 'DRAW';
    const CWINS ='Computer Won';
    const PWINS =' Player Won'
    let choiceOfPlayer ='';
    class Game extends Component {
    
        state = { 
    isGameRunning :false,
    }
   

    palyerChoice=(value)=>{
        this.start();
    console.log( value ,'ROCK');
    choiceOfPlayer = value;
     console.log(choiceOfPlayer , 'player');
        if( value !== ROCK && value !== PAPER &&value !== SCISSORS){
                alert( `INVALID input .. we  choose  ${DEFAULT_USER_CHOICE}`);
                return DEFAULT_USER_CHOICE;

    }
    else if (value === 'ROCK'){
        return ROCK;

    }
    else if ( value === 'PAPER'){
        return PAPER;
    }
    else if (value === 'SCISSORS'){
        return SCISSORS;
    }
     
      
    }
    computerChoice=()=>{
        let randomValue= Math.random();
        if(randomValue < 0.4){
            return SCISSORS;
        }
        else if(randomValue <0.7){
            return  ROCK;
        }
        else{
            return PAPER;
        }
    }

    wins =(pChoice , cChoice)=>{
        if (pChoice === cChoice){
            return DRAW
           
        }
        else if ((pChoice === ROCK && cChoice === PAPER )|| (pChoice === PAPER && cChoice ===  SCISSORS )|| (pChoice === SCISSORS && cChoice === ROCK))
            {
                return CWINS
            }     
        else {
            return PWINS
        }
        
    }
    start =()=>{         
        console.log('Game Is starting ...'); 
        this.setState({isGameRunning:true});
        }

    render() { 
        console.log('i am message')
       
        console.log(choiceOfPlayer);
     
        const choiceOfComputer = this.state.isGameRunning ? this.computerChoice() :'';
        console.log(choiceOfComputer);
        let message = ` You picked ${choiceOfPlayer} and computer picked ${choiceOfComputer}. `;
        const wins =this.wins(choiceOfPlayer,choiceOfComputer);
        if (wins === DRAW){
            message +=  ' You had a draw';
           
        }
        else if ( wins === PWINS){
            message += ' You won';
        }
        else {
            message += 'Computer Won';
        }

          
        
        
    return ( <div className="game">
    
     <button name ="ROCK" onClick ={e => this.palyerChoice(e.target.name)}>Rock </button>
        <button name="PAPER" onClick={e => this.palyerChoice(e.target.name)}>Paper</button>
        <button name ="SCISSORS" onClick = {e => this.palyerChoice(e.target.name)}>Scissors</button>
       {this.state.isGameRunning && <h2>{message}</h2> } 
       <div>
       </div>
       
       

    
     
    </div> );
    }
    }

    export default Game;