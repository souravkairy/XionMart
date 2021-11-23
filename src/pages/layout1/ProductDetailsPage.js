import React from 'react'
import ProductCard from '../../components/card/ProductCard'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import ProductDetails from '../../components/productdDetails/ProductDetails'

const ProductDetailsPage = () => {
    return (
        <>
            <div className="bg-gray-100 w-full py-2">
                <div className="container mx-auto px-4">
                    <Header />
                    <div className="my-4">
                        <ProductDetails />
                    </div>
                    <div className="my-4">
                        <ProductCard />
                    </div>
                    <div className="mt-4">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage
