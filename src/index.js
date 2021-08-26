import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Graphic from './components/pages/Graphic';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
import Terms from './components/pages/Terms';
import ScrollToTop from './components/pages/ScrollToTop'

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 100
    }
}

export default function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
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

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>,
    document.getElementById('root')
);
