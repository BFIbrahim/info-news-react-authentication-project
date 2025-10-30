import React, { useState } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const HomeNews = ({ news }) => {
    console.log(news);
    const [isExpanded, setIsExpanded] = useState(false);
        const formattedDate = new Date(news.author.published_date).toLocaleDateString();

    return (
        <div>
            <div className='mt-3 border-base-200 border rounded-md'>
                <div className='flex justify-between items-center mb-4 bg-base-200 px-3 py-2 rounded-md'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-8 rounded-full' src={news.author.img} alt="" />
                        <div>
                            <h4 className='font-semibold'>{news.author.name}</h4>
                            <h4 className='text-[11px]'>{formattedDate}</h4>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <FaRegBookmark />
                        <CiShare2 />
                    </div>
                </div>

                <div className='px-3'>
                    <h1 className='text-xl font-bold'>{news.title}</h1>
                    <img className='my-3 rounded-md' src={news.image_url} alt="" />
                    <p className='text-accent'>
                        {isExpanded
                            ? news.details
                            : news.details.length > 300
                                ? news.details.slice(0, 300) + "..."
                                : news.details
                        }{" "}
                        {news.details.length > 300 && (
                            <span
                                onClick={() => setIsExpanded(!isExpanded)}
                                className='text-secondary cursor-pointer'
                            >
                                {isExpanded ? " Read Less" : " Read More"}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeNews