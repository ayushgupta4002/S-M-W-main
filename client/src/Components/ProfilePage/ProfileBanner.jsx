import React from 'react'

function ProfileBanner() {
  return (
    <div>
    <div class=" w-[100%] h-[53vh] sm:h-[58vh] xsm:h-[68vh] pb-8 lg:h-[51vh] bg-white rounded dark:bg-gray-800 shadow-lg  duration-200  ">
    <div class="h-[35%]  overflow-hidden">
      <img class="w-full rounded-t"
        src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Photo by aldi sigun on Unsplash" />
    </div>
    <div class="flex justify-start px-5 -mt-12 mb-5">
      <span clspanss="block  h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-2 md:px-3">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">Beth J. Greene</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">Illustrator</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Asperiores molestiae vitae odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.</p>
    
      </div>
    
    </div>
    </div></div>
  )
}

export default ProfileBanner