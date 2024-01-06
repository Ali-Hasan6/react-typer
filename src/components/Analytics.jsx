import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
    return (
        <div>
            <div className=" flex flex-col items-center space-y-10  md:flex-row justify-between  max-w-[1000px] mx-auto bg-white text-black">
                {/* Image */}
                <div className=" w-[400px] md:w-5/12 ">
                    <img className="w-full" src={laptop} alt="laptop" />
                </div>

                {/* Content */}
                <div className=" md:w-7/12 flex flex-col items-center md:items-start space-y-3">
                    <p className=" text-main-color font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className=" font-bold text-4xl ">Manage Data Analytics Centrally</h1>
                    <p className=" text-justify md:text-left max-w-[560px] md:w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta beatae omnis obcaecati aliquam, quisquam et eligendi officia atque, quam corrupti consequatur commodi mollitia non, assumenda aliquid hic at possimus nihil?</p>
                    <button className=" w-52 bg-black  text-main-color font-bold py-2 rounded">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;
