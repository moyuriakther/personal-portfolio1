import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
   <div>
     <Router>
       <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/blogs">
          <Blogs/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
     </Router>
   </div>
  );
}

export default App;
