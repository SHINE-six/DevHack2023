import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='flex flex-row w-full h-full justify-around items-center'>
            <Link to = "/medicalInfo"><div>Medical Info</div></Link>
            <Link to = "/Search"><div>Ai Search </div></Link>
            <Link to = "/Main"><div>Main Menu</div></Link>
            <Link to = "/Chat"><div>Ai Chat</div></Link>
        </div>
    )

}

export default NavBar;