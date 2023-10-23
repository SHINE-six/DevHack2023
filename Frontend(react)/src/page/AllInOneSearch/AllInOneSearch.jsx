import React, { useState, useEffect } from 'react';



const AllInOneSearch = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');

    const fetchApi = async () => {
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
        <div className='bg-red-400 h-full flex flex-col flex-1'>
            <div className='flex flex-row'>
                <input type="text" className='border-2 border-black' onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={fetchApi}>Dont press me</button>
            </div>
            <div className='bg-gray-600 h-full'>
                <p className='bg-purple-400 overflow-auto max-h-140'>{article}w</p>
            </div>
        </div>
    )

}

export default AllInOneSearch;