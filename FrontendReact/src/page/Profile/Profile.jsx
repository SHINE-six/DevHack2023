import React from 'react';
import { CgProfile } from "react-icons/cg";
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai";
import { MdFitbit } from "react-icons/md";
import { SiGarmin, SiSamsung } from "react-icons/si";
import { IoIosFitness } from "react-icons/io";
import hospital from '../../components/Images/hospital.jpeg';

const Profile = () => {

    return (
        /**Main Div */
        <div className='h-full bg-white overflow-auto'>
            {/**Div for Profile */}
            <div className='flex fixed w-full justify-center py-3 bg-[#FFFFFF] border-b-2 border-darkGray'>
                <p className='font-jakarta text-lg'>PROFILE</p>
            </div>

            {/**Div for Profile avatar */}
            <div className='pt-[54px] bg-[#FFC7C7]'>
                <div className='flex justify-center items-center'>
                    <div className='w-16 my-6' >
                        <CgProfile className='bg-white w-full h-full rounded-full' />
                    </div>
                </div>
                <p className='flex pb-2 justify-center font-inter text-sm text-[#1497CF]'>Edit picture or avatar</p>
            </div>

            <div className='flex px-4 flex-row mx-2 my-4 rounded-md shadow-littlebit border-2 border-gray-500 h-40 bg-navbarActive items-center justify-center'>
                <img className='saturate-200 w-36 rounded-md aspect-auto contrast-125 ' src={hospital} alt="Hospital"/>
                <div className='flex flex-col pl-3'>
                    <div className='text-xl font-bold font-jakarta'>Hospital Serdang</div>
                    <div className='text-sm'>Patient ID: P77983</div>
                    <div className='text-sm break-all text-blue-700 font-semibold'><a href="https://www.waze.com/ms/live-map/directions/my/selangor/serdang/hospital-serdang,-jalan-hospital-serdang?to=place.ChIJbWUvOm3KzTER0JCKhCAM8w4">https://www.waze.com/ms/live-map</a></div>
                </div>
            </div>
            
            <div className='flex justify-center pt-2 px-3 font-jakarta'>Basic Info</div>
            <div className='px-3 flex flex-col'>
                <p className='text-[Gray] font-jakarta' >Name</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>John</p>
                <p className='text-[Gray]'>Gender</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Male</p>
                <p className='text-[Gray]'>Location</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Shah Alam</p>
                <p className='text-[Gray]'>Contact Number</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>6012-345 6789</p>
                <p className='text-[Gray]'>Date of Birth</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>17th July 2000</p>
                <p className='text-[Gray]'>Medical Record</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>Asthma</p>
                <p className='text-[Gray]'>Blood Pressure (from Apple Watch)</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>114mg Hg</p>
                <p className='text-[Gray]'>Heart Rate (from Apple Watch)</p>
                <p className='border-b-2 border-[lightGray] my-1 font-jakarta'>95 bpm</p>
            </div>

            <div>
                <div className='text-xl flex justify-center pt-6'>
                    <div>Connection to health devices</div>
                </div>
                <div className='grid grid-cols-3 row-auto justify-items-center gap-y-4 py-4'>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><AiFillApple/></div>
                        <div className='font-jakarta text-center'>Apple Health</div>
                    </div>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><AiFillGoogleCircle/></div>
                        <div className='font-jakarta text-center'>Google Fit</div>
                    </div>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><SiSamsung/></div>
                        <div className='font-jakarta text-center'>Samsung Health</div>
                    </div>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><IoIosFitness/></div>
                        <div className='font-jakarta text-center'>myfitnesspal</div>
                    </div>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><MdFitbit/></div>
                        <div className='font-jakarta text-center'>fitbit</div>
                    </div>
                    <div className='flex flex-col items-center w-16'>
                        <div className='text-4xl'><SiGarmin/></div>
                        <div className='font-jakarta text-center'>Garmin</div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Profile;