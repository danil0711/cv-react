import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";

import scrollToTop from "./utils/scrollToTop";

function App() {
  <ScrollToTop/>
  return (
    <div className="App">
      <Router>
        <scrollToTop/>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
