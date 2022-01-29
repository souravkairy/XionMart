import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import UserAccountsPage from '../pages/UserAccountsPage';
import ProductPage from '../pages/ProductPage';
const MainRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product-details" element={<ProductDetailsPage />} />
                    <Route path="/cart-page" element={<CartPage />} />
                    <Route path="/user-account" element={<UserAccountsPage />} />
                    <Route path="/store" element={<ProductPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainRoute
