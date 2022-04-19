import './App.css';
import NavBar from './NavBar.js';
import Portfolio from './Portfolio';
import About from './About';
import Projects from './Projects';
import Work from './Work';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Portfolio /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/work" element={ <Work /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
