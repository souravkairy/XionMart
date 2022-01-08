import React from 'react'
import image1 from '../../assets/images/ss.png'

const Hero = () => {
    return (
        <>
            <div className="flex flex-wrap bg-white px-4 py-4 ">
                <div className="w-full md:w-1/3 hidden md:block px-2">
                    <h2 className="mx-2 py-2 border rounded-md text-center font-semibold shadow-sm">Category</h2>
                    <div className="flex justify-between mx-2 py-2 px-2 border-b">
                        <h3>Women</h3>
                        <span class="material-icons flex content-center">
                            keyboard_arrow_right
                        </span>
                    </div>
                    <div className="flex justify-between mx-2 py-2 px-2 border-b">
                        <h3>Men</h3>
                        <span class="material-icons flex content-center">
                            keyboard_arrow_right
                        </span>
                    </div>
                    <div className="flex justify-between mx-2 py-2 px-2 border-b">
                        <h3>Kids</h3>
                        <span class="material-icons flex content-center">
                            keyboard_arrow_right
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-2/3 max-h-96 shadow-sm rounded-md px-2">
                    <img src={image1} alt="" className="rounded-md" />
                </div>

            </div>

        </>
    )
}

export default Hero
