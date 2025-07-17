import React from 'react';
import './Home.scss';
import bannerImage from '/images/Image_source_1.png'

const Home = () => {
  return (
    <div className='home-container'>
      <section>
        <div className='banner'
        style={{backgroundImage: `url(${bannerImage})`}}>
          <p>Chez vous, partout et ailleurs</p>
        </div>
      </section>
      <section>
        <div className='card'>

        </div>
      </section>
    </div>
  );
};

export default Home;
