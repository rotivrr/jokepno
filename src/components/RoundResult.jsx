import React from 'react';

const RoundResult = ({ result }) => {
  return (
    <div className="round-result-container">
      {result === 'Empate' && <p className="round-result">Empate!</p>}
      {result === 'Jogador vence!' && (
        <p className="round-result player-win">Jogador vence!</p>
      )}
      {result === 'Computador vence!' && (
        <p className="round-result computer-win">Computador vence!</p>
      )}
    </div>
  );
};

export default RoundResult;
