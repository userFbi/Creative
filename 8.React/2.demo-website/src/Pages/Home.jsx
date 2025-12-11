import React from 'react'
import NavbarComponent from './Navbar'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import AppLayout from '../AppLayout'

const Home = () => {
    return (
        <>
            <AppLayout>
                <Hero />
                <About />
                <Testimonials />
                <Gallery />
            </AppLayout>

        </>
    )
}

export default Home