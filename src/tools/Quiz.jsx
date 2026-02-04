import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Style Syntax",
        "Colorful Style Sheet",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What is React?",
      options: [
        "A backend framework",
        "A JavaScript library for UI",
        "A programming language",
        "A database system",
      ],
      answer: "A JavaScript library for UI",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  /* ---------- STYLES ---------- */

  const page = {
    minHeight: "55vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--bg-primary)",
  };

  const card = {
    background: "var(--card-bg)",
    padding: "30px",
    borderRadius: "18px",
    width: "90%",
    maxWidth: "420px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  };

  const title = {
    textAlign: "center",
    color: "var(--text-primary)",
    marginBottom: "20px",
  };

  const questionCount = {
    color: "var(--text-secondary)",
    marginBottom: "10px",
  };

  const questionText = {
    color: "var(--text-primary)",
    fontSize: "18px",
    marginBottom: "20px",
  };

  const options = {
    display: "grid",
    gap: "12px",
  };

  const button = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid var(--border-color)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    cursor: "pointer",
    transition: "all 0.25s ease",
  };

  const scoreText = {
    color: "var(--text-primary)",
    textAlign: "center",
    marginBottom: "20px",
  };

  const restartBtn = {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "solid",
    background: "var(--accent)",
    color: "var(--text-primary)",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  };

  /* ---------- JSX ---------- */

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>🧠 Simple Quiz</h2>

        {showScore ? (
          <>
            <h3 style={scoreText}>
              You scored {score} out of {questions.length}
            </h3>
            <button style={restartBtn} onClick={resetQuiz}>
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <p style={questionCount}>
              Question {current + 1} / {questions.length}
            </p>

            <p style={questionText}>
              {questions[current].question}
            </p>

            <div style={options}>
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  style={button}
                  onMouseEnter={(e) => {
                    e.target.style.background = "var(--accent)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "var(--bg-secondary)";
                    e.target.style.color = "var(--text-primary)";
                  }}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;