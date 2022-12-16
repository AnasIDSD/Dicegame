import './App.css';
import { useState,useEffect } from 'react';
let value


function App() {
  const[dice , setDice] = useState("./images/1.png");
  let[title , setTitle] = useState("Start Game");
  let[score , setScore] = useState(0);
  let[totalScore , setTotalScore] = useState(0);
  let[roundCount , setRoundCount] = useState(1);

  const roll = () =>{
    value = Math.floor(Math.random() * 6) + 1;
    console.log(Math.round(value))
    setDice("./images/"+Math.round(value)+".png")
    setTitle("Dice value :"+value)
    if(Math.round(value)===1){
    setScore(0)
    disableButton("#Roll");
    }
    else(
    setScore(score+=value)
    )
  }

  const saveScore = () =>{
    console.log(score)
    setTotalScore(totalScore += score)
    setScore(0)
    disableButton("#Roll")
    disableButton("#Save")   
  }

  const newGame = ()=>{
    if(roundCount<=10){
      enableButton("#Save")
      enableButton("#Roll")
      setRoundCount(roundCount = roundCount+1)
      setScore(0)
    }

  }



const disableButton = (button) => {
  document.querySelector(button).disabled = true;
};
const enableButton = (button) => {
  document.querySelector(button).disabled = false;
};
// const disableRollButton = () => {
//   document.querySelector("#Roll").disabled = true;
// };
// const disableSaveButton = () => {
//   document.querySelector("#Save").disabled = true;
// };

useEffect(()=>{
  if(roundCount>=10 && totalScore<100){
    setTitle("You Lost")
    disableButton("#Roll")
    disableButton("#Save")   
    disableButton("#new")
    
  }
  else if(roundCount<=10 && totalScore>100){
    setTitle("You won")
    disableButton("#Roll")
    disableButton("#Save")   
    disableButton("#new")
  }
}
,[roundCount,totalScore])


  return (
    <div className="App">
     <h1 className='title'>{title}</h1>

    <div className='dicearea'>
    <img src={dice} alt="" />
    <div className='Control'>
    <button id='Roll' onClick={roll}>Roll</button>
    <button id='Save' onClick={saveScore}>Save</button>
    <button id='new' onClick={newGame}>New Game</button>
    <p>{score}/{totalScore}/{roundCount}</p>
    </div>      
    </div>

    </div>
  );
}

export default App;
