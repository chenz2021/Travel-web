import React from 'react';
import styles from "./App.module.css";
import { Header, Footer } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['page-content']}>

      </div>
      <Footer />
    </div>
  );
}

export default App;