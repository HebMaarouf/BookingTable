import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../images/restauranfood.jpg'

function Header() {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h1>Little Lemon Restaurant</h1>
                <h2>the family choice</h2>
                <p>welcome to little lemon restaurant, the place where you will taste the best!</p>
                <Link to='/booking'><button aria-label='On click'>Reserve your table</button></Link>
            </div>
            <div className='banner-img'>
                <img src={bannerImage} alt=''/>
            </div>
        </section>

    </header>
  )
}

export default Header