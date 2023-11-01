import React, { useState, useEffect } from 'react';
import IndiChat from './IndiChat';
import { RiSendPlane2Fill } from 'react-icons/ri';

const ChatAi = () => {
    const [chatHist, setChatHist] = useState([]);
    const [userInput, setUserInput] = useState('');

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
                <form className='flex flex-row gap-4 pl-1 items-center' onSubmit={handleSubmit}>
                    <input className='w-80 h-10 px-2 rounded-md border-2' type="text" placeholder='Ask me anything..' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                    <button onClick={handleSubmit}><RiSendPlane2Fill className='text-3xl text-navbarActive' /></button>
                </form>
            </div>
        </div>
    )

}

export default ChatAi;