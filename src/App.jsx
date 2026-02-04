import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

import Todo from "./tools/Todo";
import Calculator from "./tools/Calculator";
import CoinFlip from "./tools/CoinFlip";
import Dice from "./tools/Dice";
import Quiz from "./tools/Quiz";
import Form from "./tools/Form";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />

        {/* TOOLS */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/coin-flip" element={<CoinFlip />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;