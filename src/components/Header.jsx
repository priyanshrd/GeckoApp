import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className="mr-4 z-50 h-[4.5%] w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
    <div className="flex items-center h-full px-5"> 
        <a className="flex h-full" href="#home">
            <img
                src={assets.logo}
                alt="Gecko"
                className="h-full w-auto max-h-full object-contain" // Changed here
            />
        </a>
        <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                Gecko 
            </div>
        </nav>
    </div>
</div>

  )
}

export default Header