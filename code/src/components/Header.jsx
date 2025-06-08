import React from 'react'

function Header() {
    return (
        <div className="bg-[#FFB542] rounded-b-2xl p-4 flex items-center justify-between">
            <div className="aspect-square w-12 p-1 rounded-full border-2 border-black bg-[#FF8A42] flex items-center justify-center">
                <img
                    src="/giga.png"
                    alt="you :)"
                    className="object-contain w-full h-full transform scale-x-[-1]"
                />
            </div>
            <h1
                className="text-white text-2xl font-semibold"
                style={{ fontFamily: "'Edu VIC WA NT Hand Pre', sans-serif" }}
            >
                <strong style={{ fontFamily: "'Savate', sans-serif" }}>AI</strong>lytics
            </h1>
        </div>
    )
}

export default Header