import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./templates/Home"
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <>
     
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      
    </>
  );
}

export default App;
