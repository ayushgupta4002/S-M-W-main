import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileBanner from '../Components/ProfilePage/ProfileBanner'
import ProfileCard from '../Components/ProfileCard'
import SideComponentProfile from '../Components/ProfilePage/SideComponentProfile'
import Tabs from '../Components/ProfilePage/Tabs'
import PostCard from '../Components/postCard'

function ProfilePage() {
  return (
    <div className='bg-[rgb(218,224,230)] '>
      <Navbar></Navbar>
      <hr></hr>
      <div className='flex flex-col p-3 ml-[3%] mr-[3%]'>
        <ProfileBanner />
        <div className='flex flex-row xnm:flex-col justify-between'>
          <SideComponentProfile />
          <div className='flex flex-col lg:ml-7 xnm:ml-[0%] w-[55vw] xnm:w-[100%]'>
            <Tabs />
     




          </div>

        </div>
      </div>
    </div>




  )
}

export default ProfilePage