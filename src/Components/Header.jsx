import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCartSharp } from "react-icons/io5";
export default function Header() {
  return (
    <>
    <nav>
      <img className='img-taplis' src='src/assets/logo-e1699869558452-300x134.png'/>
      <CgProfile className='profile'/>
      <IoCartSharp className='cart' />
      <FaSearch className='search' />
      <br/><br/>
      <ul>
        <li><Link to={'/'}className='link'>HOME</Link></li>
        <li><Link to={'/WhatsNew'}className='link-a'>WHATSNEW</Link></li>
        <li><Link to={'/Sale'}className='link-b'>SALE</Link></li>
        <li><Link to={'/KurtiSets'}className='link-c'>KURTI SETS</Link></li>
        <li><Link to={'/Cordsets'}className='link-d'>CORDSETS</Link></li>
        <li><Link to={'/IndoWesterns'}className='link-e'>INDO WESTERNS</Link></li>
        <li><Link to={'/Middies'}className='link-f'>MIDDIES</Link></li>
        <li><Link to={'/KaftanSets'}className='link-g'>KAFTAN SETS</Link></li>
        <li><Link to={'/Corsets'}className='link-h'>CORSETS</Link></li>
      </ul>
      <br/><br/>
    </nav>
    
    </>
  )
}
