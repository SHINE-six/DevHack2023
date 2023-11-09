import React, { useState, useEffect } from 'react';
import {CiSearch} from 'react-icons/ci';
import ApplyHeader from './ApplyHeader'



const AllInOneSearch = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState();
    const [toggleSearch, setToggleSearch] = useState(true);

    const searchTabHeight = toggleSearch? 'h-20' : 'h-10';
    const searchStyle = toggleSearch? 'w-60 h-10 px-2 rounded-md' : 'w-40 h-6 px-1 rounded-sm';


    const fetchApi = async (e) => {
        e.preventDefault();
        setToggleSearch(false);
        setArticle('Loading...');
        console.log("title: " + title)
        try {
            const response = await fetch(`https://w8nqnwlz-5000.asse.devtunnels.ms/api/${title}`)
            const text = await response.json();
            setArticle(ApplyHeader(text));
            console.log(text);
        }
        catch (err) {
            setArticle(err);
        }
    }
    

    
    return (
        <div className='h-full flex flex-col'>
            <div className='flex justify-center py-3 bg-white'>
                <p className='text-lg font-jakarta'>HEALTH BOT AI</p>
            </div>

            <div className={`${searchTabHeight} bg-darkGray justify-center items-center flex transition-all`}>
                <form onSubmit={fetchApi} className='flex flex-row gap-4 bg-darkGray'>
                    <input type="text" placeholder='Search (e.g Title, Product)' className={searchStyle} onClick={() => setToggleSearch(true)} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={fetchApi}><CiSearch className='text-3xl text-navbarActive'/></button>
                </form>
            </div>
            <div className='bg-[#FFFFFF] h-full overflow-auto'>{article}</div>
        </div>
    )

}

export default AllInOneSearch;
