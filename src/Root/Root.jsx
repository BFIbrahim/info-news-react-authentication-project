import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Header/Navbar'
import LatestNews from '../components/Latest News/LatestNews'
import MainNav from '../components/Header/MainNav'
import LeftAside from '../components/HomeLayouts/LeftAside'
import RightAside from '../components/HomeLayouts/RightAside'

const Root = () => {
  return (
    <div className='w-10/12 mx-auto my-3'>
      <header>
        <Navbar></Navbar>
        <section className='my-3'>
          <LatestNews></LatestNews>
        </section>

        <section>
          <MainNav></MainNav>
        </section>
      </header>
      <main className='grid grid-cols-12 gap-4 my-14'>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  )
}

export default Root