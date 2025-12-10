import React, { Children } from 'react'
import NavbarComponent from './Navbar'
import Footer from './Footer'

const AppLayout = ({children}) => {
    return (
        <div>
            
            {children}
            
        </div>
    )
}

export default AppLayout