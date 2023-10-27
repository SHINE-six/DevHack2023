import React from 'react';

const NewsVertiCard = ({ news }) => {
    const giventime = new Date(news.publishedAt);
    const currentTime = new Date();
    const timeDifference_hour = ((currentTime - giventime)/ 1000 / 60 / 60).toFixed(0);

    const openNews = () => {
        window.open(news.url, '_blank');
    }

    return (
        <div className='flex flex-row w-11/12 shadow-xl rounded-lg'>
            <img src={news.urlToImage} alt="pictuer?" onClick={openNews} className='object-cover w-32 aspect-square rounded-lg'/>
            <div className='flex flex-col h-full'>
                <div className='font-bold mt-4 mb-2 mx-2 active:font-black' onClick={openNews}>{news.title}</div>
                <div className='mx-2 h-full items-end pb-2 flex text-sm'>{timeDifference_hour} hours ago</div>
            </div>
        </div>
    )

}

export default NewsVertiCard;