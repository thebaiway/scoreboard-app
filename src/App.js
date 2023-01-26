import './App.css';
import React, {useState} from 'react'

function App() {

  const [homeScore, setHomeScore] = useState(0)

  function addOneHome () {
    setHomeScore(prevHomeScore => prevHomeScore + 1)
  }

  function addTwoHome () {
    setHomeScore(prevHomeScore => prevHomeScore + 2)
  }

  function addThreeHome () {
    setHomeScore(prevHomeScore => prevHomeScore + 3)
  }

  const [awayScore, setAwayScore] = useState(0)

  function addOneAway () {
    setAwayScore(prevAwayScore => prevAwayScore + 1)
  }

  function addTwoAway () {
    setAwayScore(prevAwayScore => prevAwayScore + 2)
  }

  function addThreeAway () {
    setAwayScore(prevAwayScore => prevAwayScore + 3)
  }

  function gameReset () {
    setHomeScore(prevHomeScore => prevHomeScore = 0)
    setAwayScore(prevAwayScore => prevAwayScore = 0)
  }

  return (
    <div className="App">
       <div class="container">
        <div>
            <h3>HOME</h3>
            <p id="score-el-home">{homeScore}</p>
            <div class="increment-div">
                <span onClick = {addOneHome}>+1</span>
                <span onClick = {addTwoHome}>+2</span>
                <span onClick = {addThreeHome}>+3</span>
            </div>
        </div>
        <div>
            <h3>AWAY</h3>
            <p id="score-el-guest">{awayScore}</p>
            <div class="increment-div">
                <span onClick = {addOneAway}>+1</span>
                <span onClick = {addTwoAway}>+2</span>
                <span onClick = {addThreeAway}>+3</span>
            </div>
        </div>
    </div>
    <div id="new-game-div">
        <h1 onClick = {gameReset}>New Game?</h1>
    </div> 
    </div>
  );
}

export default App;
