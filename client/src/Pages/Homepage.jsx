import React from 'react'
import { useState, useEffect } from 'react'
import PostCard from '../Components/postCard'
import ProfileBlock from '../Components/Trending'
import ProfileCard from '../Components/ProfileCard'
import Trending from '../Components/Trending'
import CreatePostCrad from '../Components/CreatePostCrad'
import TermsConditions from '../Components/TermsConditions'
import Navbar from '../Components/Navbar'


function Homepage() {

    return (

        <body className='bg-[rgb(218,224,230)] h-full'>
           <Navbar/>
            <hr></hr>
            <div className='flex xmd:flex-col-reverse  '>
                <Trending/>



             {/* <div className='bg-white flex flex-col h-[12%] w-[37vw] ml-[5%] pt-2 pb-1 px-3 mt-[1%] rounded-sm xmd:w-[60vw] xmd:mx-[20%]'>
                    <img class="w-10 pl-1 md:pl-1  md:w-8 cursor-pointer rounded-[100%]" src="img.jpeg" alt="..."></img>
                    <input class="bg-[rgb(238,243,248)] items-center mt-2  rounded-xl w-[100%] min-w-[20%] pt-2 pb-2 pl-1 pr-1 mb-2 flex flex-row justify-evenly" placeholder='Search'>
                    </input>
                </div>
              */}


                <div className='flex flex-col mb-3 ml-[30vw] xmd:ml-[0vw]'>
               <CreatePostCrad/>
               <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>
                <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>
                <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>
                <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>
                <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>
                <div className='mt-2  ml-[5%]  w-[37vw] xmd:w-[60vw] xmd:mx-[20%] '>
                <PostCard/>
                </div>


                </div>
<div className='flex flex-col ml-[8%] mt-[1%] xmd:mx-[0%]  '>
 
                <div class="p-2 bg-white w-[20vw] h-[20%] xmd:w-[60vw] xmd:h-[20%] flex flex-col text-center items-center  border border-gray-500 ml-[8%] mt-[1%] xmd:mx-[20%]">
                    


                    <ProfileCard></ProfileCard>
                </div>
                 <TermsConditions/>             
                  </div>
                
            </div>


        </body>



    )
}

export default Homepage