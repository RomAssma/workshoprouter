import logo from './logo.svg';
import './App.css';
import { Routes,Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/Home"> Home</Link>
            </li>
            <li>
              <Link to="/About"> About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/Home'  element= { <Home/>}/>
          <Route path='/About'  element= { <About/>}/>
          <Route path='/Contact'  element= { <Contact/>}/>

        </Routes>
    </div>
  );
}

export default App;
