import React from 'react'
import { Link } from 'react-router-dom'

const MenuPage = () => {
  return (
    <div>
      <Link to={'tasks-page'} className='btn'>
        Tasks
      </Link>
      <Link to={'formik-page'} className='btn'>
        Formik
      </Link>
    </div>
  )
}

export default MenuPage
