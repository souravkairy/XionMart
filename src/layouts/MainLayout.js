import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

const MainLayout = ({ children }) => {
    return (
        <div className="w-full">
            <div className="container mx-auto bg-white">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
