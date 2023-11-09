import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Video from '../components/Video';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Video/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home