import React from 'react';
import Logo from '/Users/nicholas/Downloads/DevHack2023/FrontendReact/src/components/Images/Logo.png';
import StatusBar from '../../components/StatusBar';
import Slogan from '/Users/nicholas/Downloads/DevHack2023/FrontendReact/src/components/Images/Slogan.png';
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
                <div style={{ paddingTop: "25px" }}>
                    <img style={styles.sloganStyle} src={Slogan} />
                </div>
                <div style={{paddingBottom: '210px'}}>
                    <p style={styles.textStyle}>Your 24-hour on-call virtual doctor</p>
                </div>
                <div style={{ marginLeft: "10px", width: "320px", paddingBottom: "17px"}}>
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
        marginTop: '15px',
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
