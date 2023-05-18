import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Page-Components/Header/Header'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Page-Components/Footer/Footer';

const App = () => {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer hideProgressBar={true} autoClose={1500}></ToastContainer>
    
    </>
  );
};

export default App;