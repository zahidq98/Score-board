import React, {Component} from 'react';
import Header from './Header'
import AddPlayerForm from './AddPlayerForm'
import Player from './Player'


class App extends Component {
  state = {
    players: [
      {
        name: "Zahid",
        score:0, 
        id: 1,
        highScore: false
      },
      {
        name: "Kasir",
        score:0, 
        id: 2,
        highScore: false
      },
      {
        name: "Elliot",
        score:0, 
        id: 3,
        highScore: false
      },
      {
        name: "Sam",
        score:0, 
        id: 4,
        highScore: false
      }
    ]
  };

prevPlayerId = 4;

handleScoreChange = (index, delta) => {
  this.setState(prevState => ({
    score: prevState.players[index].score +=delta
  }),
  ()=>{this.handleHighScore()})
}

handleHighScore = () =>{
  let scores =[];
 
  this.state.players.map((playerObj) =>{ 
    scores.push(playerObj.score)
    playerObj.highScore = (maxScore === playerObj.score) ? true : false
    return playerObj}
  )
    
  let maxScore = (Array.max = Math.max.apply(Math, scores));
  let maxIndex = scores.indexOf(maxScore); 

  this.setState(prevState =>{
    return{
      highScore: prevState.players[maxIndex].highScore =true
    }
  })}


handleAddPlayer = (name) =>{
  this.setState(prevState =>{
    return{ 
    players:[...this.state.players,{
        name, 
        score:0,
        id: this.prevPlayerId+=1
      }
 ]}}
  )}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }},

      ()=>{if (this.state.players.length>0)
        {this.handleHighScore()}
    })}



render() {
    return (
      <div className="scoreboard">
        <Header 
          players = {this.state.players}
          totalPlayers={this.state.players.length} />
  
        {/* Players list */}
        {this.state.players.map(( player, index) =>
          <Player 
            index = {index}
            name={player.name}
            score={player.score}
            id={player.id}
            changeScore={this.handleScoreChange}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            highScore = {player.highScore}           
          />)}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    )}};

export default App;