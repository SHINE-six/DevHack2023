import React, { useEffect, useState } from 'react';
import NewsHoriCard from './NewsHoriCard';
import NewsVertiCard from './NewsVertiCard';

const MainBlogs = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://w8nqnwlz-5000.asse.devtunnels.ms/apigetnews');
                const data = await response.json();
                console.log(data);
                setNews(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchNews();
    }, [])
    
    console.log(news);
    return (
        <div className='h-full overflow-auto flex flex-col'>

             {/**Div for Profile */}
             <div className={`flex justify-center py-3 theme1 bg-white`}>
                <p className='font-jakarta text-lg'>MAIN BLOG</p>
            </div>

            <div className='bg-[#33363F] h-3/5 overflow-auto flex flex-row items-center justify-items-center gap-4 mb-4  snap-x snap-mandatory'>
                {news && news.map(neww => (
                    <NewsHoriCard key={neww.id} news={neww} />
                )
                )}
            </div>
            <div className='h-full overflow-auto flex flex-col items-center gap-8 '>
                {news && news.map(neww => (
                    <NewsVertiCard key={neww.id} news={neww} />
                )
                )}
            </div>
        </div>
    )

}

export default MainBlogs;

const styles= {
    fontStyle : {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: '18px'
    }
}