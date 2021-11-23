import React from 'react'
import HomePage from '../pages/layout1/HomePage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProductDetailsPage from '../pages/layout1/ProductDetailsPage';
import CartPage from '../pages/layout1/CartPage';

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
