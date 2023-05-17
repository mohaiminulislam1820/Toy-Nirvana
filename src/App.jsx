import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Page-Components/Header/Header'

const App = () => {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  );
};

export default App;