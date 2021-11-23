import React from 'react'
import image1 from '../../assets/images/ssss.jpg'
import clsx from 'clsx';

const ProductsCard = ({className, heading}) => {
    return (
        <div className={clsx("w-full md:w-1/2 bg-white rounded-md px-4 py-3",className)}>
            <div className="border-b mb-2 pb-1 flex flex-wrap justify-between">
                <span className="font-semibold">{heading}</span>
                <a href="#" className="px-4 py-1 border rounded-md shadow-sm bg-gray-100 text-xs font-medium hover:bg-gray-300">View More</a>
            </div>
            <div className="flex space-x-4">
                <div className="border rounded-md p-0.5">
                    <img src={image1} alt="" className="rounded-md" />
                    <span className="text-center text-xs">123$</span>
                    <span class="material-icons float-right text-xs mt-1">
                        local_offer
                    </span>
                    <button className="bg-gray-100 p-1 w-full text-xs rounded-md font-medium">Add Card</button>
                </div>
                <div className="border rounded-md p-0.5">
                    <img src={image1} alt="" className="rounded-md" />
                    <span className="text-center text-xs">123$</span>
                    <span class="material-icons float-right text-xs mt-1">
                        local_offer
                    </span>
                    <button className="bg-gray-100 p-1 w-full text-xs rounded-md font-medium">Add Card</button>
                </div>
                <div className="border rounded-md p-0.5">
                    <img src={image1} alt="" className="rounded-md" />
                    <span className="text-center text-xs">123$</span>
                    <span class="material-icons float-right text-xs mt-1">
                        local_offer
                    </span>
                    <button className="bg-gray-100 p-1 w-full text-xs rounded-md font-medium">Add Card</button>
                </div>
                <div className="border rounded-md p-0.5">
                    <img src={image1} alt="" className="rounded-md" />
                    <span className="text-center text-xs">123$</span>
                    <span class="material-icons float-right text-xs mt-1">
                        local_offer
                    </span>
                    <button className="bg-gray-100 p-1 w-full text-xs rounded-md font-medium">Add Card</button>
                </div>
                <div className="border rounded-md p-0.5">
                    <img src={image1} alt="" className="rounded-md" />
                    <span className="text-center text-xs">123$</span>
                    <span class="material-icons float-right text-xs mt-1">
                        local_offer
                    </span>
                    <button className="bg-gray-100 p-1 w-full text-xs rounded-md font-medium">Add Card</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard
