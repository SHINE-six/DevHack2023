import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { ImProfile, ImManWoman, ImLocation, ImPhone, ImCalendar, ImHistory, ImMeter, ImHeart } from "react-icons/im";
import Logo from '../../components/Images/Logo.png';

const Profile = () => {
    const navigateToMain = useNavigate();

    const handleProfileClick = () => {
        navigateToMain('/Edit');
    }

    return (
        /**Main Div */
        <div className='h-full flex flex-col bg-white'>
            {/**Div for Profile */}
            <div className='flex justify-center py-3 bg-[#FFFFFF] border-b-2 border-darkGray'>
                <p className='font-jakarta text-lg'>PROFILE</p>
            </div>

            {/**Div for Profile avatar */}
            <div className='bg-[#FFC7C7]'>
                <div className='flex justify-center items-center  '>
                <div onClick={handleProfileClick} style={styles.circleStyle} >
                <CgProfile className='bg-white w-full h-full rounded-full'/>
                
                </div>
                <img
                        style={styles.imageStyle}
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                <p className='flex pb-3 justify-center font-inter text-sm text-[#1497CF]'>Edit picture or avatar</p>
            </div>
            
            <p className='flex justify-center items-center pt-2 px-3 font-jakarta'>Basic Info</p>
            <div className='px-3'>
            <p className='text-[Gray] font-jakarta' >Name</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Nicholas</p>
            <p className='text-[Gray]'>Gender</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Male</p>
            <p className='text-[Gray]'>Location</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Seri Kembangan</p>
            <p className='text-[Gray]'>Contact Number</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>6012-5539021</p>
            <p className='text-[Gray]'>Date of Birth</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>17th July 2000</p>
            <p className='text-[Gray]'>Medical Record</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>None</p>
            <p className='text-[Gray]'>Blood Pressure</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>114mg Hg</p>
            <p className='text-[Gray]'>Heart Rate</p>
            <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>95 bpm</p>
            </div>

            <div className='border-2 border-red-500'>

            </div>

        </div>
    )

}

const styles= {

    circleStyle: {
            width: '50px', /* Set the width */
            height: '50px', /* Set the height */
            backgroundColor: 'black',
            borderRadius: '50%', /* Make it a circle */
            marginTop : '25px',
            marginBottom: '25px',
            marginRight: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    },

    imageStyle: {
        width: 50,
        height: 50,
    }
}
export default Profile;