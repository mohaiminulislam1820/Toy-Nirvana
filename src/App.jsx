import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Page-Components/Header/Header'
import Footer from './Page-Components/Footer/Footer';

const App = () => {

  return (
    <>
    <Header></Header>

    <Outlet></Outlet>
    
    <Footer></Footer>

    <ScrollRestoration></ScrollRestoration>
    
    </>
  );
};

export default App;