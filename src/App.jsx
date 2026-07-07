import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <h1>Hotel Management</h1>
          <nav>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/rooms">Rooms</Link>
          </nav>
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
