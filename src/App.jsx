import React, { useState } from 'react';
import GameOption from './components/GameOption';
import RoundResult from './components/RoundResult';
import Scoreboard from './components/Scoreboard';

import './App.css';

const options = ['Pedra', 'Papel', 'Tesoura'];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [roundResult, setRoundResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Empate';
    if (
      (player === 'Pedra' && computer === 'Tesoura') ||
      (player === 'Papel' && computer === 'Pedra') ||
      (player === 'Tesoura' && computer === 'Papel')
    ) {
      return 'Jogador vence!';
    }
    return 'Computador vence!';
  };

  const playRound = (playerOption) => {
    const computerOption = getRandomChoice();
    const result = determineWinner(playerOption, computerOption);

    setPlayerChoice(playerOption);
    setComputerChoice(computerOption);
    setRoundResult(result);

    if (result === 'Jogador vence!') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'Computador vence!') {
      setComputerScore(computerScore + 1);
    }
  };

  const restartGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setRoundResult('');
    setPlayerScore(0); // Zera o placar do jogador
    setComputerScore(0); // Zera o placar do computador
  };

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      {options.map((option) => (
        <GameOption key={option} option={option} onSelect={playRound} />
      ))}
      <RoundResult result={roundResult} />
      <Scoreboard playerScore={playerScore} computerScore={computerScore} />
      <button onClick={restartGame}>Jogar Novamente</button>
    </div>
  );
};

export default App;
