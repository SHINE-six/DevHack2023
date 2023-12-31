import React from 'react';
import Logo from '../../components/Images/Logo.png';
import Slogan from '../../components/Images/Slogan.png';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigateToMain = useNavigate();
 
    return (
        <div>
            <div style={styles.container}>
                <div style={{ paddingLeft: "9px" }}>
                    <img
                        style={styles.imageStyle}
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                <div className='pt-4 flex justify-center'>
                    <div className='text-4xl text-cyan-600 font-bold tracking-wider pb-4'>DiagnoKnow</div>
                </div>
                <div style={{ marginLeft: "10px", width: "320px", paddingBottom: "5px"}}>
                    <p style={styles.termsStyle}>By tapping Login As Guest, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.</p>
                    <button onClick={() => navigateToMain('/Main')} style={styles.loginButton}>Login As Guest</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#FFC7C7',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sloganStyle: {
        width: 270,
        height: 30,
        paddingLeft: "20px",
    },
    imageStyle: {
        width: 140,
        height: 165,
    },
    textStyle: {
        color: 'white',
        fontSize: "14px",
        fontFamily: 'Roboto',
    },
    termsStyle: {
        fontSize: '12px',
        fontFamily: 'Abyssinica SIL',
        textAlign: 'center'
        
    },
    loginButton: {
        marginTop: '125px',
        height: '54px',
        backgroundColor: '#000000',
        color: 'white',
        fontFamily: 'SF Pro Display',
        fontSize: '15px',
        fontWeight: '400',
        borderRadius: '40px',
        width: '320px'
    },
};

export default LoginScreen;
