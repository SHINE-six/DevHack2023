import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome2, ImCalendar, ImHeadphones, ImAddressBook, ImEye } from "react-icons/im";

const NavBar = () => {

    return (
        <div className='flex flex-row w-full h-full justify-around items-center bg-[#33363F]'>
            <Link to = "/Main"><div className='flex flex-col items-center'><ImHome2 style={styles.iconStyle}/><p style={styles.textStyle}>Home</p></div></Link>
            <Link to = "/Medical"><div className='flex flex-col items-center'><ImCalendar style={styles.iconStyle}/><p style={styles.textStyle}>Schedule</p></div></Link>
            <Link to = "/Search"><div className='flex flex-col items-center'><ImEye style={styles.iconStyle}/><p style={styles.textStyle}>AI Search</p></div></Link>
            <Link to = "/Chat"><div className='flex flex-col items-center'><ImHeadphones style={styles.iconStyle}/><p style={styles.textStyle}>Chat AI</p></div></Link>
            <Link to = "/Profile"><div className='flex flex-col items-center'><ImAddressBook style={styles.iconStyle}/><p style={styles.textStyle}>Profile</p></div></Link>
        </div>
    )

    }
    const styles = {
        textStyle : {
            fontFamily: 'Mulish',
            fontSize: "12px",
            color: 'white'
        },

        iconStyle: {
            color: 'white',
            margin: '4px'
        }
    };

export default NavBar;