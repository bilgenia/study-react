import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: 12, justifyContent: 'center', padding: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
