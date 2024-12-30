import React from 'react'
import Billboard from './Billboard'
import Trailer from './Trailer'
import AboutUs from './AboutUs'

const LandingPage = () => {
    return (
        <div className="bg-[#0d0f2b]">
            <Billboard />
            <Trailer />
            <AboutUs/>
        </div>
    )
}

export default LandingPage
