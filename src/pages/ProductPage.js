import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/card/ProductCard'
import SideBar from '../components/sidebar/SideBar';


const ProductPage = () => {
    return (
        <MainLayout>
            <div className="my-4 px-8 flex space-x-4">
                <div className="w-1/4 bg-gray-50 border rounded-md">
                    <SideBar />
                </div>
                <div className="w-3/4 bg-gray-50 border rounded-md">
                    <ProductCard />
                </div>
            </div>
        </MainLayout>
    );
};

export default ProductPage;
