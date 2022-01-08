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
            <CategorySection />
            <ProductCard />
            <HeroTwo />
            <ProductCard />
            <HeroThree />
        </MainLayout>
    )
}

export default HomePage
