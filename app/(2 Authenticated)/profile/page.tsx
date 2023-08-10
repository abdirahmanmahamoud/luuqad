"use client"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import ProfileSettings from "@/components/profile/ProfileSettings"
import ProfileUser from "@/components/profile/ProfileUser"
import { NextPage } from "next"

type Props = {}

const Profile: NextPage = (props: Props) => {
  return (
    <>
      {/* TopBar-Container Here Start */}
      {/* <TopBar backgroundColor='bg-[#58cc02]' borderColor='border-[#46a302]' /> */}
      <ProfileSettings />
      {/* TopBar-Container Here End */}

      {/* LeftBar-Container Here Start */}
      <LeftBar selectedTab='Profile' />
      {/* LeftBar-Container Here End */}

      {/* Main-Right-Middle-Container Here Start*/}

      <div className='main-right-middle-container flex justify-center gap-12  sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[820px]   c-min-lg:ml-64'>
        {/* Main-middle-Left Scrolling Here Start */}
        <div className=' main-middle-left flex max-w-[592px] grow flex-col c-sm:p-4 c-sm:mb-20'>
          <ProfileUser />
        </div>
        {/* Main-middle-Left Scrolling Here End */}

        {/* Main-middle-Right Sticky Here Start */}
        <RightBar />
        {/* Main-middle-Right Sticky Here End */}
      </div>
      {/* Main-Right-Middle-Container Here End */}

      {/* BottomBar-Container Here Start */}
      <BottomBar selectedTab='Profile' />
      {/* BottomBar-Container Here End */}
    </>
  )
}

export default Profile
