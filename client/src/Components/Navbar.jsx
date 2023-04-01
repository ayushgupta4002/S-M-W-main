import React from 'react'
import Homepage from '../Pages/Homepage'
import { useState, useEffect } from 'react'

function Navbar() {
    const [login, setLogin] = useState(false)
    
  return (
    <nav class="flex sticky top-0  justify-between items-center w-[100%] px-4 border-bottom border-gray-600 bg-white mx-auto  ">
    <div className='flex '>
        <img class="w-12 cursor-pointer" src="google.png" alt="..."></img>

    </div>
    <input class="bg-[rgb(238,243,248)] items-center mt-2  rounded-xl w-[50%] min-w-[20%] pt-2 pb-2 pl-2 pr-2 mb-2 flex flex-row justify-evenly" placeholder='Search'>

    </input>
    <div
        class="flex gap-[4vw] ">
        <ul class={login ? "flex flex-row md:items-center gap-[3vw] md:gap-3 pt-2" : "hidden "}>

            <li>
                <img class="w-10 pl-5 md:pl-1  md:w-8 cursor-pointer" src="google.png" alt="..."></img>
                <a class="hover:text-gray-500 md:hidden" href="#">Messages</a>

            </li>
            <li>
                <img class="w-10 pl-5 md:pl-1 md:w-8 cursor-pointer" src="google.png" alt="..."></img>
                <a class="hover:text-gray-500 md:hidden w-3" href="#">Trending</a>

            </li>
            <li className='items-center'>
                <img class="w-10 pl-3 md:pl-1 md:w-8 cursor-pointer" src="google.png" alt="..."></img>
                <a class="hover:text-gray-500 md:hidden pl-3" href="#"> you</a>

            </li>

        </ul>
        <div className={login ? "hidden" : "flex "}>
            <button class="bg-[#a6c1ee] text-white md:px-3 px-5 py-2 md:py-3 md:rounded-[10%] rounded-full hover:bg-[#87acec]">Sign in</button>


        </div>
    </div>

</nav>
  )
}

export default Navbar