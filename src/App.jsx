import './App.css'
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Compose from './components/Compose';

import Alert from './components/Alert';
import Context from "./context/context"


const App = () => {
  const {isDark} = useContext(Context)
  
  return (
    
    <main className="min-h-[100vh] font-custom" data-theme={isDark ? "dim" : "bumblebee"}>
    <Router>
      <Navbar/>
      <Alert/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/compose" element={<Compose/>} />
      </Routes>
    <Footer/>
    </Router>
    </main>
  );
}

export default App;