import './App.css';

function App() {
  return (
    <div className="App">
       <div class="container">
        <div>
            <h3>HOME</h3>
            <p id="score-el-home">0</p>
            <div class="increment-div">
                <span onclick="addOneHome()">+1</span>
                <span onclick="addTwoHome()">+2</span>
                <span onclick="addThreeHome()">+3</span>
            </div>
        </div>
        <div>
            <h3>AWAY</h3>
            <p id="score-el-guest">0</p>
            <div class="increment-div">
                <span onclick="addOneGuest()">+1</span>
                <span onclick="addTwoGuest()">+2</span>
                <span onclick="addThreeGuest()">+3</span>
            </div>
        </div>
    </div>
    <div id="new-game-div">
        <h1 onclick="gameReset()">New Game?</h1>
    </div> 
    </div>
  );
}

export default App;
