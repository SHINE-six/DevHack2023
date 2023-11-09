import React, { useState } from 'react';

const ApplyHeader = (text) => {
    
    
    //heading, paragraph, list, list-item, image 
    return (
        <div className='font-inter px-2 tracking-wide'>
            {text['content'].map((sentence) => {
                switch (sentence['type']) {
                    case 'header':
                        return <div className='text-3xl font-bold my-2 uppercase'>{sentence['text']}</div>
                    case 'paragraph':
                        return <div className='text-base'>{sentence['text']}</div>
                    case 'list':
                        return <div className='text-lg font-semibold my-2'>{sentence['text'][0]}</div>
                    case 'list-item':
                        return <div className='text-base mx-4'>&bull;{sentence['text']}</div>
                    case 'image':
                        return <img src={sentence['text']} alt="image" />
                    default:
                        return <div className='text-base'>{sentence['text']}</div>
                }
            })}
        </div>
    )
}
export default ApplyHeader;