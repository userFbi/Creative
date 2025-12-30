import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);

  function handleClick(index) {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    const gameDraw = !gameWinner && newBoard.every(cell => cell !== null);

    if (!gameWinner && !gameDraw) {
      setIsXNext(!isXNext);
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game Draw!";
  } else {
    status = `Current Player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Tic Tac Toe</h1>
      <h2>{status}</h2>

      <div style={boardStyle}>
        {board.map((value, index) => (
          <button
            key={index}
            style={cellStyle}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button onClick={resetGame} style={{ marginTop: 20, padding: 10 }}>
        Reset
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gap: "5px",
  justifyContent: "center",
};

const cellStyle = {
  width: "100px",
  height: "100px",
  fontSize: "32px",
  cursor: "pointer",
};




export default App;
