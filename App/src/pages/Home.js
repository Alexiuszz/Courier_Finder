import React from 'react';
import MainNavbar from '../Components/Nav/MainNavbar';
import RightBar from '../Components/layout_components/RightSidebar';
import Info from '../Components/layout_components/Info';
import MediaCards from '../Components/layout_components/MediaCards';
import Footer from '../Components/layout_components/Footer';
import Details from '../Components/layout_components/Details';
import '../styles/home.css';

function Home() {

    return (
        <div className='home'>
            <MainNavbar />
            <RightBar />
            <Info />
            <Details />
            <MediaCards />
            <Footer />
        </div>


    )
}

export default Home;