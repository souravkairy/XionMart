import React from 'react'
import ProductCard from '../components/card/ProductCard'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ProductDetails from '../components/product-details/ProductDetails'
import MainLayout from '../layouts/MainLayout'

const ProductDetailsPage = () => {
    return (
        <MainLayout>
            <div className="my-4">
                <ProductDetails />
            </div>
            <div className="my-4">
                <ProductCard />
            </div>
        </MainLayout>
    )
}

export default ProductDetailsPage
