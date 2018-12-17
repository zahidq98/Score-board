import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'

const Header = ({players, title}) => {
    return (
      <header>
      <Stats players ={players}/>
        <h1>{ title }</h1>
        <Stopwatch/>
      </header>
    );
}

Header.defaultProps ={
  title:'Scoreboard'
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}

export default Header;