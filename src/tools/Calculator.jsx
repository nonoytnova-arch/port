import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  /* ---------------- STYLES (INLINE + CSS VARIABLES) ---------------- */

  const containerStyle = {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--bg-primary)",
  };

  const calculatorStyle = {
    background: "var(--card-bg)",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    width: "260px",
  };

  const inputStyle = {
    width: "100%",
    height: "45px",
    marginBottom: "15px",
    fontSize: "20px",
    textAlign: "right",
    borderRadius: "8px",
    border: "1px solid var(--border-color)",
    padding: "8px",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  };

  const buttonsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  };

  const clearStyle = {
    ...buttonStyle,
    background: "#ef4444",
    color: "#fff",
  };

  const equalsStyle = {
    ...buttonStyle,
    background: "#22c55e",
    color: "#fff",
    gridColumn: "span 2",
  };

  /* ---------------- JSX ---------------- */

  return (
    <div style={containerStyle}>
      <div style={calculatorStyle}>
        <input
          type="text"
          value={input}
          readOnly
          style={inputStyle}
        />

        <div style={buttonsGrid}>
          <button style={clearStyle} onClick={clearInput}>C</button>
          <button style={buttonStyle} onClick={() => handleClick("/")}>/</button>
          <button style={buttonStyle} onClick={() => handleClick("*")}>*</button>
          <button style={buttonStyle} onClick={() => handleClick("-")}>-</button>

          <button style={buttonStyle} onClick={() => handleClick("7")}>7</button>
          <button style={buttonStyle} onClick={() => handleClick("8")}>8</button>
          <button style={buttonStyle} onClick={() => handleClick("9")}>9</button>
          <button style={buttonStyle} onClick={() => handleClick("+")}>+</button>

          <button style={buttonStyle} onClick={() => handleClick("4")}>4</button>
          <button style={buttonStyle} onClick={() => handleClick("5")}>5</button>
          <button style={buttonStyle} onClick={() => handleClick("6")}>6</button>

          <button style={buttonStyle} onClick={() => handleClick("1")}>1</button>
          <button style={buttonStyle} onClick={() => handleClick("2")}>2</button>
          <button style={buttonStyle} onClick={() => handleClick("3")}>3</button>

          <button style={buttonStyle} onClick={() => handleClick("0")}>0</button>
          <button style={buttonStyle} onClick={() => handleClick(".")}>.</button>
          <button style={equalsStyle} onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;