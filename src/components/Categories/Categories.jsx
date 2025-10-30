import React, { use } from 'react'
import { NavLink } from 'react-router';

const categoryPromis = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromis)
    return (
        <div>
            <h1 className='font-bold text-primary'>All Category</h1>

            <div className='grid grid-cols-1 gap-2 mt-5'>
                {
                    categories.map((category) =>
                        <NavLink
                            key={category.id}
                            className='rounded-none text-start px-3 py-2 bg-base-100 hover:bg-base-200 text-accent rounded-sm'
                            to={`/category/${category.id}`}
                        >{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default Categories