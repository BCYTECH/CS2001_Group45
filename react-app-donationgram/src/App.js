import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import DonatePage from "./Pages/DonatePage";
import LoginPage from "./Pages/LoginPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import RecruitmentPage from "./Pages/RecruitmentPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MemberDashboard from './Pages/MemberDashboard';
import RegisterPage from './Pages/RegisterPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/" component={HomePage}/>  
        <Route path="/contactus" component={ContactPage}/>
        <Route path="/donate" component={DonatePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/privacy-policy" component={PrivacyPolicy}/>
        <Route path="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/recruitment" component={RecruitmentPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/dashboard" component={MemberDashboard}/>
      </BrowserRouter>
      <Footer/>      
    </div>
  );
}

export default App;
