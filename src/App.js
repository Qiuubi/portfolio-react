import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import Art from './components/Art';
import Web from './components/Web';
import Login from "./components/Login";
import LegalDesign from "./components/LegalDesign";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/web" element={<Web />}/>
          <Route path="/art" element={<Art />}/>
          <Route path="/legal-design" element ={<LegalDesign />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
