import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <div className="header">
         <div className="logo">
            <h2>PROT<span>SAHAN</span></h2>
         </div>
         <ul>
         <li><Link className='link' to='/visitor'>VISITOR.NO</Link></li>
         <li><Link className='link' to='/'>PRODUCT</Link></li>
         <li><Link className='link' to='/feedback'>FEEDBACK</Link></li>
         <li><Link className='link' to='/cart'>CART</Link></li>
            </ul>
      </div>
    </div>
  )
}

export default Nav
