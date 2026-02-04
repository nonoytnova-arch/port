import { useState } from "react";

function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setDiceNumber(randomNumber);
      setRolling(false);
    }, 800);
  };

  /* ---------- STYLES ---------- */

  const page = {
    minHeight: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--bg-primary)",
  };

  const card = {
    background: "var(--card-bg)",
    padding: "30px",
    borderRadius: "18px",
    width: "260px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
  };

  const title = {
    color: "var(--text-primary)",
    marginBottom: "20px",
  };

  const diceBox = {
    width: "90px",
    height: "90px",
    margin: "20px auto",
    borderRadius: "12px",
    background: "var(--bg-secondary)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    fontWeight: "bold",
    color: "var(--text-primary)",
    transition: "transform 0.6s",
    transform: rolling ? "rotate(720deg)" : "rotate(0deg)",
  };

  const button = {
    marginTop: "15px",
    padding: "10px 18px",
    border: "solid",
    borderRadius: "8px",
    background: rolling ? "#94a3b8" : "var(--accent)",
    color: "var(--text-primary)",
    fontSize: "16px",
    cursor: rolling ? "not-allowed" : "pointer",
  };

  const result = {
    marginTop: "15px",
    color: "var(--text-secondary)",
    fontSize: "15px",
  };

  /* ---------- JSX ---------- */

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>🎲 Dice Roller</h2>

        <div style={diceBox}>{diceNumber}</div>

        <button style={button} onClick={rollDice} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>

        <p style={result}>You rolled: {diceNumber}</p>
      </div>
    </div>
  );
}

export default DiceRoller;