import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='header'>
        <main className='main'>
            <div className='header-logo'>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='header-menu'>
                <div>Home</div>
                <div>Services</div>
                <div>Find a Team</div>
                <div>About Us</div>
                <div>Articles</div>
                <div>Portofolio</div>
                <div>Contact us</div>
            </div>
        </main>
    </header>
  )
}

export default Header