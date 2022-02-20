import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import './App.css';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import SectionFooter from "./components/layouts/Section";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vaccination from "./pages/Vaccination";

function App() {
  return (
    <div className="App">
      
      <Router>
      <div class="home-3">
        <Header></Header>
        <Routes>
          <Route  path="/"         element={<Index/>}/>
          <Route  path="/vaccination"         element={<Vaccination/>}/>

          <Route  path="*"         element={<NotFound/>}/> 
        </Routes>

        <SectionFooter></SectionFooter>
        <Footer></Footer>
      </div>
    </Router>

    </div>
  );
}

export default App;
