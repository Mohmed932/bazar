import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = ({setsearch,conut}) => {

  return (
    <div className='Header'>
      <img className='logo' src='https://bazar-react.vercel.app/assets/images/logo2.svg' alt='phone'/>
      <div className='Searching'>
        <input type='text' placeholder='Searching for...' onChange={(e)=>setsearch(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='Cart'>
        <i class="fa-solid fa-user"></i>
        <div className='Counter'>
          <Link to='/Cart' className='tocart'>
             <i class="fa-solid fa-bag-shopping"></i>
             {conut>0?<h4 className='count'>{conut}</h4>:''}
         </Link>
        </div>
      </div>
    </div>
  )
}

export default Header