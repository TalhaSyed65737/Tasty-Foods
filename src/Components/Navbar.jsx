import React from 'react'
import { useDispatch} from 'react-redux'
import { setSearch } from '../Redux/Slices/searcSlice'

function Navbar() {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center px-8  py-4'>
      <div>
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className='text-2xl font-bold'>Tasty Foods</h1>
      </div>

      {/* *********** */}

      <div>
        <input
        onChange={(e)=> dispatch(setSearch(e.target.value))}
        className=' py-3 px-4 border border-gray-300 rounded-md text-sm outline-none w-full lg:w-[25vw]'
        type="search" name="search" id="" placeholder='Search Your Favourite'
         />
      </div>
    </nav>
  )
}

export default Navbar