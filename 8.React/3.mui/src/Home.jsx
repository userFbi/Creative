import React from 'react'

import ChefSection from './Pages/Chef'
import AboutUs from './Pages/AboutUs'
import EventIntro from './Pages/Event'
import ChoosePackage from './Pages/ChoosePackage'
import MenuWithImages from './Menu'
import ContactPage from './Pages/Contact'
import Hero from './Pages/Hero'

const Home = () => {
    return (
        <>
            <Hero/>
            <ChefSection />
            <AboutUs />
            <EventIntro />
            <ChoosePackage />
            <MenuWithImages />
            <ContactPage />
        </>
    )
}

export default Home