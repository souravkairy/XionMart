import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';


const Navigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact  path="/"  element={<HomePage />} />
                    <Route exact  path="/productDetails" element={<ProductDetailsPage />} />
                    <Route exact  path="/cartPage" element={<CartPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default Navigation
