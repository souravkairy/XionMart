import React from 'react'
import ProductCard from '../../components/card/ProductCard'
import ProductsCard from '../../components/card/ProductsCard'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import Hero from '../../components/hero/Hero'
import HeroThree from '../../components/hero/HeroThree'
import HeroTwo from '../../components/hero/HeroTwo'

const HomePage = () => {
    return (
        <div className="bg-gray-100 w-full py-2">
            <div className="container mx-auto px-4">
                <Header />
                <Hero />
                <div className="flex flex-col md:flex-row">
                    <ProductsCard className="mr-0 md:mr-2 my-4" heading="New Arrivals" />
                    <ProductsCard className="ml-0 md:ml-2 my-4" heading="Top-ranked Products" />
                </div>
                <div className="flex flex-col md:flex-row">
                    <ProductsCard className="mr-0 md:mr-2 my-4" heading="Top Sales" />
                    <ProductsCard className="ml-0 md:ml-2 my-4" heading="Premium" />
                </div>
                <div className="my-4">
                    <ProductCard />
                </div>
                <div className="my-4">
                    <HeroTwo />
                </div>
                <div className="my-4">
                    <ProductCard />
                </div>
                <div className="my-4">
                    <HeroThree/>
                </div>
                <div className="mt-4">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default HomePage
