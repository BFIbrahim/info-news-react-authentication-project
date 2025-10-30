import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Header/Navbar'
import LatestNews from '../components/Latest News/LatestNews'

const Root = () => {
  return (
    <div>
        <header>
            <Navbar></Navbar>
            <section className='w-10/12 mx-auto my-3'>
              <LatestNews></LatestNews>
            </section>
        </header>
        <main>
            <section className='left-nav'></section>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <section className='right-nav'></section>
        </main>
    </div>
  )
}

export default Root