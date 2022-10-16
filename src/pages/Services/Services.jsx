import React from 'react';
import './Services.scss';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';
import pexels2 from '../../assets/pexels2.svg';
import pexels1 from '../../assets/pexels1.svg';
import pexels3 from '../../assets/pexels3.svg';



const Services = () => {
  return (
    <section className='services-section'>
      <div className='services'>
        <div className='services-logo'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
        <div className='services-block'>
          <div className='services-title'>
            <h3 className='services-title-one'>Our Excellent Services</h3>
            <p className='services-title-two'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
          </div>
          <div className='services-card'>
              <div className='card-pexel'>
                <div><img src={pexels1} alt="" /></div>
                <div><h4>Industrial</h4></div>
                <div><p>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p></div>
              </div>
              <div className='card-pexel'>
                <div><img src={pexels2} alt="" /></div>
                <div><h4>Commercial</h4></div>
                <div><p>Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings</p></div>
              </div>
              <div className='card-pexel'>
                <div><img src={pexels3} alt="" /></div>
                <div><h4>Resedential</h4></div>
                <div><p>Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments</p></div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services