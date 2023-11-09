import React from 'react';

const NewsHoriCard = ({ news }) => {

    const openNews = () => {
        window.open(news.url, '_blank');
    }

    return (
        <div className='w-screen h-auto snap-always snap-center'>
            <div className='w-screen flex justify-center'>
                <div className='w-11/12 relative' onClick={openNews}>
                    <img src={news.urlToImage} alt="pictuer?" className='object-fill shadow-2xl w-full aspect-[1.8] rounded-lg'/>
                    <div className='w-full aspect-[1.8] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0'></div>
                    <div className='absolute bottom-0 left-0 text-white ml-4 mb-2 font-bold text-xl'>{news.title}</div>
                </div>
            </div>
        </div>
    )

}

export default NewsHoriCard;