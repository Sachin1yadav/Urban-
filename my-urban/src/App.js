import logo from './logo.svg';
import './App.css';
import Home from './Homepage/Home';
import Services from './Homepage/services';
import Login from './Homepage/Login';
import Sing from"./Homepage/Sign"
import Policy from"./Homepage/Policy"
import ReactDOM from "react-dom";
import {Routes,Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sing" element={<Sing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/Policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
