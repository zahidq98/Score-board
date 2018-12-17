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
        id: 1
      },
      {
        name: "Kasir",
        score:0, 
        id: 2
      },
      {
        name: "Elliot",
        score:0, 
        id: 3
      },
      {
        name: "Sam",
        score:0, 
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

prevPlayerId = 4;


handleScoreChange = (index, delta) => {
  this.setState(prevState => ({
    score: prevState.players[index].score +=delta
  }));
}


handleAddPlayer = (name) =>{
  console.log(...this.state.players);
  this.setState(prevState =>{
    return{ 
    players:[
      ...prevState.players,{
        name, 
        score:0,
        id: this.prevPlayerId+1
      }
    ]}}
  )
}

render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players = {this.state.players}
          totalPlayers={this.state.players.length} 
        />
  
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
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
