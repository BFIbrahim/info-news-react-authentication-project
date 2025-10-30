import { format } from 'date-fns'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-4xl uppercase font-bold'>The Info News</h1>
            <p className='text-accent mt-2'>Journalism Without Fear or Favour</p>
            <p className='font-semibold mt-4 text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    </div>
  )
}

export default Navbar