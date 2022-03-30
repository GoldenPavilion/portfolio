import './App.css';
import Portfolio from './Portfolio';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Portfolio />
        <Routes>
          <Route exact path="/" element={ <Portfolio /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/projects" elements={ <Projects /> } />
          <Route exact path="/skills" elements={ <Skills /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
