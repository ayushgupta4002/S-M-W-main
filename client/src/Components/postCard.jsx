import React from 'react'
import { Link } from "react-router-dom";

function PostCard() {
  return (
<Link to={`/post`}>
    <div class="container mx-auto flex flex-wrap text-gray-600 body-font bg-white rounded-md " >
      <div class="flex  ">
        <div class="p-2 pl-3 md:w-full">
          <div class="flex   sm:flex-col flex-col">
            <div className='mb-2 flex'>
              <img class="w-11 pl-1 md:pl-1 pt-1  md:w-8 cursor-pointer rounded-full" src="img.jpeg" alt="..."></img>
              <div className='pl-5'>
            <p className='font-normal'>ayush_ftw</p>
            <p className='text-sm  font-light'> posted on 1/1/2023</p></div>
              </div>
           

            <div class="flex-grow">
              {/* <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2> */}
              <p class="leading-relaxed text-base text-md mb-3">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
 
                
      
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </Link>

  )
}

export default PostCard