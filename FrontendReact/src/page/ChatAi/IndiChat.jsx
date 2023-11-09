import React from 'react';
import Injury from '../../components/Images/injury.png';

const IndiChat = ({chat}) => {
    console.log(chat);
    console.log(chat['content']);

    const chatStyle = chat['author'] === '0' ? 'bg-[#2DBFC5] justify-self-end text-white' : 'bg-[#FFC7C7] justify-self-start';
    return (
        <div className={`grid mx-2 my-2`}>
            {chat['content'] == 'Injury' ? 
            <div className={`${chatStyle} w-fit px-3 py-2 rounded-md font-inter text-base`}><img src={Injury}></img></div>
            :<div className={`${chatStyle} w-fit px-3 py-2 rounded-md font-inter text-base`}>{chat.content}</div>}
        </div>
    )
}
export default IndiChat;