import React from 'react'
import { useLoaderData } from 'react-router'
import HomeNews from '../../components/HomeNews/HomeNews'

const Home = () => {

  const allNews = useLoaderData()
  

  return (
    <div>
      {
        allNews.map(news => <HomeNews 
          key={news.id}
          news={news}
        ></HomeNews>)
      }
    </div>
  )
}

export default Home