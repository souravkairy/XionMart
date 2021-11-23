import React from 'react'
import ShoppingCartPage from '../../components/cart/ShoppingCartPage'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

const CartPage = () => {
    return (
        <div className="bg-gray-100 w-full py-2">
            <div className="container mx-auto px-4">
                <Header />
                <div className="my-4">
                    <ShoppingCartPage />
                </div>
                <div className="mt-4">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default CartPage
