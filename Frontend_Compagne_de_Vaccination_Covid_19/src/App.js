import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import './App.css';
// import Footer from "./components/layouts/Footer";
// import Header from "./components/layouts/Header";
import SectionFooter from "./components/layouts/Section";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vaccination from "./pages/Vaccination";

import Login from "./pages/DashRespoRegion/Login";
import DashAdmin from "./pages/DashRespoRegion/DashAdmin";
import Conter from "./pages/DashRespoRegion/Conter";
import ProtectedRouteRespo from "./ProtectedRoute/ProtectedRouteRespo";
import Ville from "./pages/DashRespoRegion/Ville";

function App() {
  return (
    <div className="App">
      
      <Router>
      <div class="home-3">
        {/* <Header></Header> */}
        <Routes>
          <Route  path="/"         element={<Index/>}/>
          <Route  path="/vaccination"         element={<Vaccination/>}/>

          <Route  path="/dashregion"                   element={<ProtectedRouteRespo><DashAdmin/></ProtectedRouteRespo>}/>

          <Route  path="/conter"                   element={<ProtectedRouteRespo><Conter/></ProtectedRouteRespo>}/>
          <Route  path="/ville"                   element={<ProtectedRouteRespo><Ville/></ProtectedRouteRespo>}/>
          <Route  path="/loginregion"                   element={<Login/>}/> 

          <Route  path="*"         element={<NotFound/>}/> 
        </Routes>

        <SectionFooter></SectionFooter>
        {/* <Footer></Footer> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
