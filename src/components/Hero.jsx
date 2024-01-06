import React from "react";
import Typed from 'react-typed';
function Hero() {
    return <div>
        {/* You can use the max-w & mx-auto to center stuff */}
        <div className=" max-w-[800px] mx-auto h-screen flex flex-col justify-center items-center space-y-5 ">
            <p className=" text-main-color uppercase font-semibold">
                GROWING WITH DATA ANALYTICS
            </p>
            {/* Start with the main, sm for anything bigger than the sm , aka bigger than the main , md anything bigger than sm ... */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold">Grow with data.</h1>
            <div className=" font-semibold text-2xl sm:text-3xl md:text-4xl flex space-x-2">
                <p>Fast, flexible financing for</p>
                <Typed className="text-gray-500" strings={[
                    'BTB',
                    'DTC',
                    'BTC',
                    'SAAS',
                ]}
                    typeSpeed={150}
                    backSpeed={140}
                    loop />
            </div>
            <p className=" text-center text-gray-500 ">Monitor your data analytics to increase revenue for BTB, BTC, <br />
                & SASS platforms.
            </p>
            <button className=" bg-main-color text-black p-3 w-3/12 rounded-md  font-medium">Get Started</button>
        </div>
    </div>;
}

export default Hero;
