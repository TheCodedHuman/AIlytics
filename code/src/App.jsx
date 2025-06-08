import React from 'react'
import Header from './components/Header'
import PopularRepos from './components/PopularRepos'
import ChartBox from './components/ChartBox'

function App() {
    return (
        <div className="bg-[#FFE7B2] min-h-screen flex flex-col">
            <Header />
            <PopularRepos />
            <ChartBox />
        </div>
    )
}

export default App
