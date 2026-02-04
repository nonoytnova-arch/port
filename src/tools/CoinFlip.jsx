import { useState } from "react";

function CoinFlipper() {
  const [side, setSide] = useState("Heads");
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    if (flipping) return;

    setFlipping(true);

    setTimeout(() => {
      const newSide = Math.random() < 0.5 ? "Heads" : "Tails";
      setSide(newSide);
      setFlipping(false);
    }, 1000);
  };

  /* ---------- STYLES ---------- */

  const wrapper = {
    minHeight: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--bg-primary)",
  };

  const card = {
    background: "var(--card-bg)",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    width: "280px",
  };

  const title = {
    color: "var(--text-primary)",
    marginBottom: "20px",
  };

  const coin = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
    background: "gold",
    color: "#000",
    cursor: "pointer",
    transition: "transform 0.6s",
    transform: flipping ? "rotateY(720deg)" : "rotateY(0deg)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  const button = {
    padding: "10px 18px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: flipping ? "not-allowed" : "pointer",
    background: flipping ? "#94a3b8" : "var(--accent)",
    color: "#fff",
  };

  /* ---------- JSX ---------- */

  return (
    <div style={wrapper}>
      <div style={card}>
        <h2 style={title}>🪙 Coin Flipper</h2>

        <div style={coin} onClick={flipCoin}>
          {side}
        </div>

        <button style={button} onClick={flipCoin} disabled={flipping}>
          {flipping ? "Flipping..." : "Flip Coin"}
        </button>
      </div>
    </div>
  );
}

export default CoinFlipper;