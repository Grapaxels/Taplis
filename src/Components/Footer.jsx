import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer>
      <br/>
      <img className='img-taplis' src='src/assets/fevicon3.png'/>

      <br/><br/>
      <div className='useful-links'>
      <h4>USEFUL LINKS</h4>
      <p><Link to={'/Collections'} className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'} className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'} className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'} className='useful'>Collections</Link></p>
      </div>
      
      <div className='legals'>
      <h4>LEGALS</h4> 
      <p><Link to={'/Collections'}className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'}className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'}className='useful'>Collections</Link></p>
      <p><Link to={'/Collections'}className='useful'>Collections</Link></p>
      </div> 
      
      <div className='newsletter'>
        <h3>Newsletter</h3>
        <pre>Subscribe the weekly newsletter<span><br/>for all the latest updates</span></pre>
        <h5>Email</h5>
        <form action='/' method='post'>
          <input className='mail'  type="email"/>
          <br/><br/>
          <button>Subscribe</button>
          
        </form>
        <br/>
      </div>
    </footer>
    </>
  )
}
