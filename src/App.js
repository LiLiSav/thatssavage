import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Graphic from './components/pages/Graphic';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import Terms from './components/pages/Terms';

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/graphic-design' component={Graphic} />
                  <Route path='/contact-us' component={Contact} />
                  <Route path='/about-us' component={About} />
                  <Route path='/Terms-and-conditions' component={Terms} />
                  <Route path='***' component={Home} />
              </Switch>
              <Footer />
          </Router>
          

    </>
  );
}

export default App;
