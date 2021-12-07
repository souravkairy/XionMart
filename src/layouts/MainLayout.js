import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

const MainLayout = ({ children }) => {
    return (
        <div className="bg-gray-100 w-full py-2">
            <div className="container mx-auto px-4">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
