import React from 'react'
import SavedNicknameComponent from './saved'
const Favorites = () => {
  return (
    <div>
    <div className='absolute top-0 left-0 ml-2 mt-5'>
    <a href={"/"} className='text-red-500 text-2xl animate-pulse '>Home</a>
    </div>
    <div className='flex flex-col   h-screen items-center justify-center'> 
    <h2 className='text-3xl font-thin text-orange-900 text-center mb-5'>Saved Nicknames</h2>

    <SavedNicknameComponent />
    
    </div>
    
    </div>

  )
}
export default Favorites
