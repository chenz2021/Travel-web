import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage, ShoppingCartPage } from './pages'
import {useSelector} from "./redux/hooks";


const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(element, props)
    ) : (
      <Link to="/signIn"></Link>
    ); 
  }
  return <Route {...rest} />;
}

function App() {
  const jwt = useSelector((s) => s.user.token);
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/detail/:id" element={<DetailPage/>} />
          {/* <Route path="/search/:keywords?" element={<SearchPage/>}/> */}
          {/* <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            element={<ShoppingCartPage/>}
          /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>  
      </Router>     
    </div>
    
  );
}

export default App;