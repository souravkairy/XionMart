import React, { useState, useEffect } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { auth } from '../firebase/firebase.utils'

const MainLayout = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            console.log(currentUser);
        })
    }, [currentUser]);
    return (
        <div className="w-full">
            <div className="container mx-auto bg-white">
                <Header authUser={currentUser} />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
