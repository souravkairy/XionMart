import React from 'react'
import image1 from '../../assets/images/ss.jpg'

const Hero = () => {
    return (
        <>
            <div className="shadow-sm rounded-md max-w-7xl px-8">
                <img src={image1} alt="" className="max-h-96 w-full" />
            </div>
        </>
    )
}

export default Hero
