// Home.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import './Home.css'; // Archivo CSS para estilos específicos de Home

const Home = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Home;
