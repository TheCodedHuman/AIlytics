import React from 'react'
import repoData from '../utils/repoData'

function PopularRepos() {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Orange Box - Section Title */}
      <div className="bg-[#FF8A42] rounded-xl p-4">
        <h2 className="text-white sm:text-lg md:text-xl font-semibold whitespace-nowrap text-center">
          Your Most Popular GitHub Repositories
        </h2>
      </div>

      {/* Repository List Box */}
      <div className="bg-[#FFF3CA] p-4 rounded-xl w-full max-w-md pb-64">
        <ul>
          {repoData.map((repo, index) => (
            <li key={index} className="p-2 text-gray-800 flex justify-between">
              <span className="font-medium truncate">{index + 1}. {repo.name}</span>
              <span className="text-gray-600">
                {parseFloat((repo.views / 1000000).toFixed(2))}
                M Views
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PopularRepos