import React from 'react'

function CreatePostCrad() {
    return (
        <div className='bg-white w-[37vw] flex flex-col pb-6 px-4 ml-[5%] mt-[3%] rounded-sm xmd:w-[60vw] xmd:mx-[20%] h-[20vh] xmd:h-[23%]'>
            <div className='flex pb-2 pt-2'>
            <img class="w-11 pl-2 md:pl-1 pt-2   md:w-8 cursor-pointer rounded-full" src="img.jpeg" alt="..."></img>
            <div className='pl-5'>
            <p className='font-normal'>ayush_ftw</p>
            <p className='text-sm  font-light'> 1/1/2023</p></div>
            </div>
            <input class="bg-[rgb(238,243,248)] items-center mt-2  rounded-xl w-[100%] min-w-[20%] py-2  pl-1 pr-1 mb-2 flex flex-row justify-evenly" placeholder='Post'>

            </input>

        </div>
    )
}

export default CreatePostCrad