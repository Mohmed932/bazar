import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Brands from './components/Brands/Brands';
import Acer from './components/Acer';
import Asus from './components/Asus';
import Dell from './components/Dell';
import Xiaomi from './components/Xiaomi';
import Apple from './components/Apple';
import Sony from './components/Sony';
import DetalesDell from './pages/DetalesDell';
import Datalesprodects from './pages/Datalesprodects';
import NotFouand from './pages/NotFouand/NotFouand';
import DetalesApple from './pages/DetalesApple';
import DetalesAcer from './pages/DetalesAcer';
import DetalesAsus from './pages/DetalesAsus';
import DetalesSony from './pages/DetalesSony';
import DetalesXiaomi from './pages/DetalesXiaomi';
import Footer from './components/Footer/Footer';


const App = () => {
  const [search,setsearch] = useState('')
  const [conut,setconut] = useState(0)
  const [Show,setShow] = useState(false)
  return (
      <div className='App'>
         <Router>
           <Header setsearch={setsearch}  conut={conut} Show={Show} setShow={setShow}/>
           <Brands Show={Show} setShow={setShow}/> 
           <Routes>
             <Route path='*' element={<NotFouand/>}/>
             <Route path='/' element={<Apple  search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/Acer' element={<Acer search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/Asus' element={<Asus search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/Dell' element={<Dell search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/Sony' element={<Sony search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/Xiaomi' element={<Xiaomi search={search} setconut={setconut} conut={conut}/>}/>
             <Route path='/prodect/:id' element={<DetalesDell setconut={setconut} conut={conut}/>}/>
             <Route path='/DetalesApple/:id' element={<DetalesApple setconut={setconut} conut={conut}/>}/>
             <Route path='/DetalesAcer/:id' element={<DetalesAcer setconut={setconut} conut={conut}/>}/>
             <Route path='/DetalesAsus/:id' element={<DetalesAsus setconut={setconut} conut={conut}/>}/>
             <Route path='/DetalesSony/:id' element={<DetalesSony setconut={setconut} conut={conut}/>}/>
             <Route path='/DetalesXiaomi/:id' element={<DetalesXiaomi setconut={setconut} conut={conut}/>}/>
             <Route path='Cart' element={<Datalesprodects setconut={setconut} conut={conut}/>}/>
           </Routes>
           <Footer/>
         </Router> 
      </div>
  )
}

export default App