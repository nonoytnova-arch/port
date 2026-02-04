import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /* ---------- STYLES ---------- */

  const page = {
    minHeight: "50vh",
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

  const inputBox = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const input = {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "solid",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
    outline: "none",
  };

  const addBtn = {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "solid",
    background: "var(--accent)",
    color: "var(--text-primary)",
    cursor: "pointer",
  };

  const todoItem = (completed) => ({
    display: "flex",
    alignItems: "center",
    border: "solid",
    justifyContent: "space-between",
    padding: "12px",
    borderRadius: "10px",
    background: "var(--bg-secondary)",
    marginBottom: "10px",
    color: completed ? "var(--text-secondary)" : "var(--text-primary)",
    textDecoration: completed ? "line-through" : "none",
    cursor: "pointer",
  });

  const deleteBtn = {
    background: "transparent",
    border: "solid",
    color: "crimson",
    cursor: "pointer",
    fontSize: "16px",
  };

  /* ---------- JSX ---------- */

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>📝 Todo List</h2>

        <div style={inputBox}>
          <input
            style={input}
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button style={addBtn} onClick={addTodo}>
            Add
          </button>
        </div>

        {todos.length === 0 && (
          <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
            No tasks yet 🚀
          </p>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            style={todoItem(todo.completed)}
            onClick={() => toggleTodo(todo.id)}
          >
            <span>{todo.text}</span>
            <button
              style={deleteBtn}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;