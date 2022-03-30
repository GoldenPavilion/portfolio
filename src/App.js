import './App.css';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
