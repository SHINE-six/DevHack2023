import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigateToMain = useNavigate();

    const handleProfileClick = () => {
        navigateToMain('/Edit');
    }

    return (
        /**Main Div */
        <div className='border-2 border-red-500 h-full flex flex-col'>
            {/**Div for Profile */}
            <div className='flex justify-center py-3'>
                <p style={styles.fontStyle}>PROFILE</p>
            </div>

            {/**Div for Profile avatar */}
            <div className='border-2 border-red-500 flex justify-center'>
                <div onClick={handleProfileClick} style={styles.circleStyle}></div>
            </div>

            <div className='border-2 border-red-500'>

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
            margin: '35px'
    }
}
export default Profile;