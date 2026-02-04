import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="main dashboard-container">
      <h1 className="dashboard-title">Projects Dashboard</h1>

      <p className="dashboard-description">
        Select a tool to explore:
      </p>

      <ul className="dashboard-list">
        <li className="dashboard-item">
          <Link className="dashboard-link" to="/todo">Todo App</Link>
        </li>

        <li className="dashboard-item">
          <Link className="dashboard-link" to="/calculator">Calculator</Link>
        </li>

        <li className="dashboard-item">
          <Link className="dashboard-link" to="/coin-flip">Coin Flipper</Link>
        </li>

        <li className="dashboard-item">
          <Link className="dashboard-link" to="/dice">Dice Roller</Link>
        </li>

        <li className="dashboard-item">
          <Link className="dashboard-link" to="/quiz">Quiz App</Link>
        </li>

        <li className="dashboard-item">
          <Link className="dashboard-link" to="/form">Form Validation</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;