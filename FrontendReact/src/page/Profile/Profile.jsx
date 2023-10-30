import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { ImProfile, ImManWoman, ImLocation, ImPhone, ImCalendar, ImHistory, ImMeter, ImHeart } from "react-icons/im";

const Profile = () => {
    const navigateToMain = useNavigate();

    const handleProfileClick = () => {
        navigateToMain('/Edit');
    }

    return (
        /**Main Div */
        <div className='h-full flex flex-col bg-white'>
            {/**Div for Profile */}
            <div className='flex justify-center py-3 bg-[#F5F5F5]'>
                <p style={styles.fontStyle}>PROFILE</p>
            </div>

            {/**Div for Profile avatar */}
            <div className='flex justify-center bg-[#FFC7C7]'>
                <div onClick={handleProfileClick} style={styles.circleStyle} >
                <CgProfile className='bg-white w-full h-full rounded-full'/>
                </div>
            </div>
            <p className='pt-2 px-3' style={styles.basicInfo}>Basic Info</p>
            <div>
                <div className='flex flex-row items-center px-8'>
                <ImProfile className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>James Bond</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImManWoman className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>Male</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImLocation className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>Seri Kembangan</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImPhone className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>+6012-5539021</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImCalendar className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>17th July 2000</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImHistory className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>None</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImMeter className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>114 mg Hg</p>
                </div>
                <div className='flex flex-row items-center px-8'>
                <ImHeart className='w-8 h-8 mx-2 my-1'/><p style={styles.basicInfo}>95 bpm</p>
                </div>
            </div>

            <div className='border-2 border-red-500'>

            </div>

        </div>
    )

}

const styles= {
    fontStyle : {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '18px'
    },

    circleStyle: {
            width: '140px', /* Set the width */
            height: '140px', /* Set the height */
            backgroundColor: 'black',
            borderRadius: '50%', /* Make it a circle */
            margin: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    },

    basicInfo : {
        fontFamily : 'SF Pro Display',
    }
}
export default Profile;