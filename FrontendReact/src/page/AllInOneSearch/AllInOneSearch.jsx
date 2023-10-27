import React, { useState, useEffect } from 'react';
import {CiSearch} from 'react-icons/ci';



const AllInOneSearch = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
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
            const text = await response.text();
            setArticle(text);
        }
        catch (err) {
            setArticle(err);
        }
    }

    
    return (
        <div className='bg-red-400 h-full flex flex-col'>
            <div className={`${searchTabHeight} justify-center items-center flex transition-all`}>
                <form onSubmit={fetchApi} className='flex flex-row gap-4'>
                    <input type="text" className={searchStyle} onClick={() => setToggleSearch(true)} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={fetchApi}><CiSearch className='text-3xl'/></button>
                </form>
            </div>
            <div className='bg-purple-400 h-full overflow-auto'>{article}wwwwwwwwwwwwwwwwwwwwwwww dewfefewfe cfewfbebwfiughfuih wwwwwwwwwwwwwwwwwww</div>
        </div>
    )

}

export default AllInOneSearch;