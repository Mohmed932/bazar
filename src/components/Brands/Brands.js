import React from 'react'
import './Brands.css'
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='Brands'>
       <div className='logoBrands'>
         <Link className='rows' to='/'>
            <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75' alt='phone'/>
           <h3>Apple</h3>
         </Link>
       </div>
       <div className='logoBrands'>
       <Link className='rows' to='/Dell'>
          <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=32&q=75' alt='phone'/>
          <h3>Dell</h3>
       </Link>
       </div>
       <div className='logoBrands'>
         <Link className='rows' to='/Xiaomi'>
            <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75' alt='phone'/>
            <h3>Xiaomi</h3>
         </Link>
       </div>
       <div className='logoBrands'>
         <Link className='rows' to='/Asus'>
            <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75' alt='phone'/>
            <h3>Asus</h3>
         </Link>
       </div>
       <div className='logoBrands'>
        <Link className='rows' to='/Sony'>
           <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsony.png&w=32&q=75' alt='phone'/>
           <h3>Sony</h3>
        </Link>
       </div>
       <div className='logoBrands'>
       <Link className='rows' to='/Acer'>
          <img src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Facer.png&w=32&q=75' alt='phone'/>
          <h3>Acer</h3>
       </Link>
       </div>
    </div>
  )
}

export default Brands