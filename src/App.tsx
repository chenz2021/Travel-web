import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/detail/:id" element={<DetailPage/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>  
      </Router>     
    </div>
    
  );
}

export default App;