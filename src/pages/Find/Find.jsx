import React from 'react';
import './Find.scss';
import line from '../../assets/line.svg';
import bag from '../../assets/bag.svg';
import pen from '../../assets/pen.svg';
import watch from '../../assets/watch.svg';
import save from '../../assets/save.svg';

const Find = () => {
  return (
    <div className='find'>
      <div className='find-section'>
        <img src={line} alt="" />
        <div className='find-title'>
            <h3 className='find-title-h3'>What Make Us Different?</h3>
            <p className='find-title-p'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>
        </div>
        <div className='find-card'>
          <div className='find-cards'>
            <div className='find-icon-one'><span className='find-icon-two'><div><img src={bag} alt="" /></div></span></div>
            <div><h4 className='find-cards-title'>Experienced</h4></div>
            <div><p className='find-cards-text'>Our experience of 25 years of building and making achievements in the world of development</p></div>
          </div>
          <div className='find-cards'>
            <div className='find-icon-one'><span className='find-icon-two'><div><img src={pen} alt="" /></div></span></div>
            <div><h4 className='find-cards-title'>competitive price</h4></div>
            <div><p className='find-cards-text'>The prices we offer you are very competitive without reducing the quality of the company's work in the slightest</p></div>
          </div>
          <div className='find-cards'>
            <div className='find-icon-one'><span className='find-icon-two'><div><img src={watch} alt="" /></div></span></div>
            <div><h4 className='find-cards-title'>On Time</h4></div>
            <div><p className='find-cards-text'>We prioritize the quality of our work and finish it on time</p></div>
          </div>
          <div className='find-cards'>
            <div className='find-icon-one'><span className='find-icon-two'><div><img src={save} alt="" /></div></span></div>
            <div><h4 className='find-cards-title'>Best Materials</h4></div>
            <div><p className='find-cards-text'>The material determines the building itself so we recommend that you use the best & quality materials in its class.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find