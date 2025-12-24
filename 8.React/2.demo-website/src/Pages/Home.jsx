import React from 'react'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import AppLayout from '../AppLayout'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Testimonials />
            <Gallery />
        </>
    )
}

export default Home