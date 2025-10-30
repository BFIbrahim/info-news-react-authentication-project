import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../../components/NewsCard/NewsCard'

const NewsCategory = () => {

  const { id } = useParams()
  const allNews = useLoaderData()

  const [news, setNews] = useState([])

  useEffect(() => {

    if (id == '0') {
      setNews(allNews)
      return
    } else if (id == '1') {
      const filteredNews = allNews.filter(news => news.others.is_today_pick == true)
      setNews(filteredNews);
    } else {

      const filteredNews = allNews.filter(news => news.category_id == id)
      setNews(filteredNews);
    }

  }, [allNews, id])

  return (
    <div>
      <div>
        <h1 className='font-bold text-accent'>Total news: <span className='text-secondary'>{news.length}</span></h1>
      </div>
      <div className='grid grid-cols-1'>
        {
          news.map(singleNews => <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  )
}

export default NewsCategory