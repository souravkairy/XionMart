import React from 'react'
import ShoppingCartPage from '../components/cart/ShoppingCartPage'
import MainLayout from '../layouts/MainLayout'

const CartPage = () => {
    return (
        <MainLayout>
            <div className="my-4">
                <ShoppingCartPage />
            </div>
        </MainLayout>
    )
}

export default CartPage
