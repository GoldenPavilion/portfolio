import './App.css';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Portfolio />
        <Routes>
          <Route exact path="/" element={} />
          <Route exact path="/about" element={} />
          <Route exact path="/projects" elements={} />
          <Route exact path="/skills" elements={} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
