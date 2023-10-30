import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImHome2, ImCalendar, ImHeadphones, ImAddressBook, ImEye } from "react-icons/im";

const NavBar = () => {
    const [homeMode, setHomeMode] = useState('text-white');
    const [searchMode, setSearchMode] = useState('text-white');
    const [chatMode, setChatMode] = useState('text-white');
    const [profileMode, setProfileMode] = useState('text-white');

    const handleClick = (icon) => {
        switch (icon) {
            case 'home':
                setHomeMode('text-navbarActive');
                setSearchMode('text-white');
                setChatMode('text-white');
                setProfileMode('text-white');
                break;
            case 'AiSearch':
                setSearchMode('text-navbarActive');
                setHomeMode('text-white');
                setChatMode('text-white');
                setProfileMode('text-white');
                break;
            case 'ChatAi':
                setChatMode('text-navbarActive');
                setHomeMode('text-white');
                setSearchMode('text-white');
                setProfileMode('text-white');
                break;
            case 'Profile':
                setProfileMode('text-navbarActive');
                setHomeMode('text-white');
                setSearchMode('text-white');
                setChatMode('text-white');
                break;
        }
    }

    return (
        <div className='flex flex-row w-full h-full justify-around items-center bg-[#33363F]'>
            <Link to = "/Main"><div onClick={() => handleClick('home')} className={`flex flex-col items-center ${homeMode}`}><ImHome2 style={styles.iconStyle}/><p style={styles.textStyle}>Home</p></div></Link>
            {/* <Link to = "/Medical"><div onClick={() => handleClick(AiSearch)} className={`flex flex-col items-center ${homeMode_style}`}><ImCalendar style={styles.iconStyle}/><p style={styles.textStyle}>Schedule</p></div></Link> */}
            <Link to = "/Search"><div onClick={() => handleClick('AiSearch')} className={`flex flex-col items-center ${searchMode}`}><ImEye style={styles.iconStyle}/><p style={styles.textStyle}>AI Search</p></div></Link>
            <Link to = "/Chat"><div onClick={() => handleClick('ChatAi')} className={`flex flex-col items-center ${chatMode}`}><ImHeadphones style={styles.iconStyle}/><p style={styles.textStyle}>Chat AI</p></div></Link>
            <Link to = "/Profile"><div onClick={() => handleClick('Profile')} className={`flex flex-col items-center ${profileMode}`}><ImAddressBook style={styles.iconStyle}/><p style={styles.textStyle}>Profile</p></div></Link>
        </div>
    )

    }
    const styles = {
        textStyle : {
            fontFamily: 'Mulish',
            fontSize: "12px",
            // color: 'white'
        },

        iconStyle: {
            // color: 'white',
            margin: '4px'
        }
    };

export default NavBar;