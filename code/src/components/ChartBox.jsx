import React, { useState, useEffect } from "react";

function ChartBox() {
    const [isExpanded, setIsExpanded] = useState(true); // Default = visible
    const [collapsedHeight, setCollapsedHeight] = useState("-100px"); // Default collapse value

    useEffect(() => {
        // Dynamically set collapse height based on screen size
        const screenHeight = window.innerHeight;
        setCollapsedHeight(`-${screenHeight * 0.4}px`); // Adjusts based on 40% of screen height
    }, []);

    const toggleChartBox = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`fixed left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg w-[90%] max-w-md md:w-[60%] flex flex-col items-center transition-all duration-300`}
            style={{
                bottom: isExpanded ? "0px" : collapsedHeight, // Dynamically adapts to screen height
            }}
        >
            {/* Toggle Arrow Button */}
            <button 
                onClick={toggleChartBox} 
                className={`w-8 h-8 flex justify-center items-center rounded-full bg-[#DAD094] mb-2 cursor-pointer transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                }`}
            >
                <i className="fa-solid fa-chevron-up"></i>
            </button>

            {/* Chart Image */}
            <img
                src="/chart.png"
                alt="Chart"
                className="w-full rounded-lg border-4 border-indigo-900"
            />

            {/* Transparent Bordered Button */}
            <button className="mt-4 border border-red-600 text-red-600 px-4 py-2 rounded-lg w-full bg-transparent">
                See Full Report
            </button>
        </div>
    );
}

export default ChartBox;