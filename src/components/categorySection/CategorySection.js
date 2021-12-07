import React from 'react'
const Categories = [
    { name: "men" },
    { name: "women" },
    { name: "kids" },
    { name: "pant" },
    { name: "t-shirt" },
    { name: "shorts" },
    { name: "genji" },
    { name: "muflar" },
    { name: "muja" },
    { name: "rumal" },
]
const CategorySection = () => {
    return (
        <div className="bg-white rounded-md py-4">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Category</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-3 gap-x-3 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-3">
                    {
                        Categories.map((category) =>
                            <button className="group relative border py-1  rounded-md">
                                {category.name}
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default CategorySection
