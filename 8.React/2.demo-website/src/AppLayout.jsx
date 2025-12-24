import React, { Children } from 'react'
import NavbarComponent from './Pages/Navbar'
import Footer from './Pages/Footer'

const AppLayout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            {children}
            <Footer />
        </>
    )
}

export default AppLayout