import React from 'react'
import { Link } from 'react-router-dom'

function ProfileCard() {
  return (
    <Link to={`/profile`}>
    <div>

    <img class="w-12 pl-1 md:pl-1 pt-1  md:w-8  inline-flex items-center justify-center   mb-3 flex-shrink-0 rounded-full cursor-pointer rounded-full" src="img.jpeg" alt="..."></img>
                    
    <div class="flex-grow">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">ayush_ftw</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
    </div>
    </Link>
  )
}

export default ProfileCard