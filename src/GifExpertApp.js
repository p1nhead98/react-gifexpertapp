import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  
   
  const [categories, setCategories] = useState(['Ninja Gaiden']);




  return (
    <>

      <h2>soy algo</h2>
      <AddCategory setCategories={setCategories}/>
      <hr></hr>

      

      <ol>
        {
          categories.map( category => (
             <GifGrid 
              key={category}
              category={category}
               />
          ))
        }
      </ol>

    </>
  )

}



export default GifExpertApp
