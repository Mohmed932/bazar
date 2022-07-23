import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
import {asus} from '../data'
import {giveprodect} from '../redux/reducers'


const Dell = ({search,setconut,conut}) => {
  const dispatsh = useDispatch()
  return (
    <div className='Apple'>
      {asus.filter((item)=>{
        if(search===''){
          return item
        }else if(item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return item
        }
      }).map(({id,title,oraginprice,discount,img})=>(
          <div className='minApple' key={id}>
               <Link to={`/DetalesAsus/${id}`} >
                    <img className='appleimg' src={img} alt='phone'/>
               </Link>
               <h4 className='product_title'>{title}</h4>
               <div className='Pricing'>
               <div className='discount'>
                 <h4>$ {discount}</h4>
                 <h3 className='oraginprice'>$ {oraginprice}</h3>
              </div>
                 <button onClick={()=>setconut(conut+1)||dispatsh(giveprodect({id,title,oraginprice,discount,img}))}>+</button>
               </div>
         </div>
      ))}
    </div>
  )
}

export default Dell


// filter((val)=>{
//   if(search.length===0){
//     return val
//   }else if(val.title.toLowerCase().includes(search.toLowerCase())){
//     return val
//   }
// }).