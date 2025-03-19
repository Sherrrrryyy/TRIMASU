import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturedFlavors from '../components/FeaturedFlavors'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturedFlavors />
            <Footer />
        </>
    )
}

export default Home
