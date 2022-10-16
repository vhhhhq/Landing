import React from 'react';
import './Landing.scss';
import Header from '../../components/Header/Header';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services/Services';
import Find from '../../pages/Find/Find';

const Landing = () => {
  return (
    <div className='landing'>
        <Header/>
        <Home/>
        <Services/>
        <Find />
    </div>
  )
}

export default Landing