import React from 'react'
import ProductCard from '../components/card/ProductCard'
import CategorySection from '../components/categorySection/CategorySection'
import Hero from '../components/hero/Hero'
import HeroThree from '../components/hero/HeroThree'
import HeroTwo from '../components/hero/HeroTwo'
import MainLayout from '../layouts/MainLayout'

const HomePage = () => {
    return (
        <MainLayout>
            <Hero />
            <div className="my-4">
                <CategorySection />
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
                <HeroThree />
            </div>
        </MainLayout>
    )
}

export default HomePage
