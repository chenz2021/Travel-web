import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signIn" element={<h1>Sign In</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>  
      </Router>     
    </div>
    
  );
}

export default App;