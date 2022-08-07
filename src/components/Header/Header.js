import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {createSearch} from '../../redux/reducers'

const Header = ({Show,setShow}) => {
  const {mount}  = useSelector(state=>state.getprodect)
  const dispatch = useDispatch()
  const handelShow = () => {
    setShow(!Show)
  }

  return (
    <div className='Header'>
      <img className='logo' src='https://bazar-react.vercel.app/assets/images/logo2.svg' alt='phone'/>
      <div className='Searching'>
        <input type='text' placeholder='Searching for...' onChange={(e)=>dispatch(createSearch(e.target.value))}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='Cart'>
        <div className='Counter'>
           <Link to='/Cart' className='tocart'>
             <i class="fa-solid fa-bag-shopping"></i>
             {mount>0?<h4 className='count'>{mount}</h4>:''}
           </Link>
        </div>
        <div className='mobile' onClick={handelShow}>
            <span className={Show?'mobile-res one':'mobile-res'}></span>
            <span className={Show?'mobile-res two':'mobile-res'}></span>
            <span className={Show?'mobile-res three':'mobile-res'}></span>
        </div>
      </div>
    </div>
  )
}

export default Header