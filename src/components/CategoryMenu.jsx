import React from 'react'
import { useState,useEffect } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch ,useSelector } from 'react-redux'
import { setCategory } from '../redux/CategorySlices'

const CategoryMenu = () => {
  const [categories,setCategories] = useState([])
  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.category.category)

  const listUniqueCategories = () =>
  {
    const uniqueCategories = [
      ...new Set(FoodData.map(food => food.category))
    ]
    setCategories(uniqueCategories)
  }
  useEffect(()=>
  {
    listUniqueCategories();
    console.log(categories);
  },[])
  return (
    <div>
        <h3 className='font-semibold m-3 text-center lg:text-left'>Find the best food</h3>
        <div className='my-4 text flex gap-3 overflow-x-auto scroll-smooth mx-3 '>
            <button onClick={()=>dispatch(setCategory("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>  
            {
              categories.map((category,index)=>
              {
                return <button onClick={()=>dispatch(setCategory(category))}  key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                  selectedCategory === category && "bg-green-500 text-white"
                } `}>{category} </button>  

              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu