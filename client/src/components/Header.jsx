import React from 'react'
import {Navbar, Button} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

function Header(){
    const path = useLocation().pathname;
    return(
        
        <div>
          <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark: text-black'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Remmie's</span>
       Blog  
       </Link>
       <div className='flex gap-2 md:order-2'>
       
        <Link to='/signin'>
        <Button gradientDuoTone='purpleToBlue'outline>
        Sign In
       </Button>
        </Link>
        <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
        <Navbar.Link >
          <Link to='/' active={path === '/'} as={'div'}>Home</Link>
        </Navbar.Link>
        <Navbar.Link >
          <Link to='/about'active={path === '/about'} as={'div'}>About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/services' active={path === '/services'} as={'div'}>Services</Link>
        </Navbar.Link>
      </Navbar.Collapse>
       </Navbar>
        </div>
    )
}

export default Header