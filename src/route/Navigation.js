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
import UserAccountsPage from '../pages/UserAccountsPage';
const Navigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/product-details" element={<ProductDetailsPage />} />
                    <Route exact path="/cart-page" element={<CartPage />} />
                    <Route exact path="/user-account" element={<UserAccountsPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default Navigation
