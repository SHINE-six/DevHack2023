import React, { useState, useEffect } from 'react';
import IndiChat from './IndiChat';
import { RiSendPlane2Fill, RiImageAddFill } from 'react-icons/ri';


const ChatAi = () => {
    const [chatHist, setChatHist] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [fakeCounter, setFakeCounter] = useState(0);

    useEffect(() => {
        const InitChat = async () => {
            try {
                const response = await fetch('https://w8nqnwlz-5000.asse.devtunnels.ms/apiIniChat');
                const data = await response.json();
                setChatHist(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        InitChat();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserInput('');

        try {
            const response = await fetch('https://w8nqnwlz-5000.asse.devtunnels.ms/apichat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "prompt": userInput })
            });
            const data = await response.json();
            setChatHist(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    
    const handleImage = (e) => {
        e.preventDefault();
        setChatHist([...chatHist, {'author': '0', 'content': 'Injury'}]);
    }

    const fakeResponse = [{'author': '0', 'content': 'help me schedule an emergency room appointment, I got stung by a bee'}
                                        , {'author': '1', 'content': 'Is there red swelling? Do you feel dizzy? Where is the location of the sting?'}
                                        , {'author': '0', 'content': 'Yes, it is swelling red? but i am not dizzy, and i got stung on my back'}
                                        , {'author': '1', 'content': 'I will help you schedule an emergency room appointment, please wait a moment. Do you need an ambulance sent to your location?'}
                                        , {'author': '0', 'content': 'No, I don\'t need an ambulance, thank you'}
                                        , {'author': '1', 'content': 'Based on your symptoms, a suitable and available hospital is Hospital Serdang, located 3 km from your location. Your appointment has been placed in queue in Hospital Serdang Emergency Room, with an estimated wait time of 15 mins. Waze: https://www.waze.com/ms/live-map/directions/my/selangor/serdang/hospital-serdang,-jalan-hospital-serdang?to=place.ChIJbWUvOm3KzTER0JCKhCAM8w4'}
                                    ];
    const handleMovieTime = (e) => {
        e.preventDefault();
        setUserInput('');
        setChatHist([...chatHist, fakeResponse[fakeCounter]]);
        setFakeCounter(fakeCounter + 1);
    }


    return (
        <div className='h-full flex flex-col'>

            {/**Div for Profile */}
            <div className={`flex justify-center py-3 theme1 bg-white border-b-2 border-darkGray`}>
                <p className='font-jakarta text-lg'>CHAT AI</p>
            </div>

            <div className='h-full bg-lightGray overflow-auto pt-1 px-1'>
                {chatHist && chatHist.map(chat => (
                    <IndiChat key={chat.id} chat={chat} />
                )
                )}
            </div>
            <div className='h-20 bottom-0 bg-[#33363F] justify-center flex items-center'>
                <form className='flex flex-row gap-4 pl-1 items-center w-full mx-3' onSubmit={handleSubmit}>
                    <button type="button" onClick={handleImage}><RiImageAddFill className='text-3xl text-navbarActive'/></button>
                    <input className='h-10 px-2 rounded-md border-2 grow' type="text" placeholder='Ask me anything..' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}><RiSendPlane2Fill className='text-3xl text-navbarActive' /></button>
                </form>
            </div>
            <div className='w-20 h-20  absolute right-0 bottom-36' onClick={handleMovieTime}></div>
        </div>
    )

}

export default ChatAi;