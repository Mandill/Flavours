import React from 'react'
import { useDispatch } from 'react-redux'
import {setSearch} from "../redux/SearchSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className='flex flex-col gap-3 lg:flex-row  justify-between items-center w-[95%] my-2 mx-auto'>
        <div>
            <h2 className='font-semibold text-lg text-zinc-700'>{new Date().toUTCString().slice(0,16)}</h2>
            <h1 className='font-bold text-2xl text-center'>Flavours</h1>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} type='text' placeholder='Search Here' autoComplete='off' className='lg:w-[300px] w-full border-2  px-5 py-2 rounded-lg outline-none'/>
        </div>
    </nav>
  )
}

export default Navbar