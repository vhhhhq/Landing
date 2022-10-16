import React from 'react';
import './Home.scss';
import General from '../../assets/General.svg';
import Vector from '../../assets/Vector.svg';

const Home = () => {
  return (
    <section className='section-home'>
      <div className='home'>
        <div>
          <p className='home-title'>We Provide Architectural design and Construction</p>
          <p className='home-text'>​More than 100 building and housing projects that we have built. The building owner chose us over other contractors in Jakarta, because our work is different</p>
        </div>
        <div className='home-button'>
          <button>Discover More</button>
        </div>
      </div>
      <div className='home-card'>
        <div className='home-one'>
          <div>
            <span className='number'>300<span className='plus'>+</span></span>
            <p className='text'>Happy Client</p>
          </div>
          <div>
            <span className='number'>900<span className='plus'>+</span></span>
            <p className='text'>Amazing Projects</p>
          </div>
          <div>
            <span className='number'>20<span className='plus'>+</span></span>
            <p className='text'>Awards Winning</p>
          </div>
        </div>
        <div className='home-two'>
          <div className='project'>
            <p className='years'>General</p>
            <p className='operated'>Project</p>
          </div>
          <div className='year-home'>
            <div className='about-home'>
              <span className='year-number'>25</span>
              <p className='years'>Years</p>
              <div className='vector'>
                <img src={Vector} alt="" />
              </div>
            </div>
            <p className='operated'>Operated</p>
          </div>
          
          <div>
            <p className='project-text'>As a trusted general project that has been operating for 25 years, our commitment is always to prioritize our client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home