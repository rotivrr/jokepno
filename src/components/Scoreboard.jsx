import React from 'react';

const Scoreboard = ({ playerScore, computerScore }) => {
  return (
    <div>
      <p>Placar</p>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
    </div>
  );
};

export default Scoreboard; 
