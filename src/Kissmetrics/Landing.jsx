import React from 'react'
import './Landing.css'
import Nav from './nav'
import "./nav.css"

const Landing = () => {
  return (
    <div className='container'>

        <Nav></Nav>
        <div className="main" style={{width:'100vw',height:"100vh",top:"0"}}>
            <h1>Analytics Built to Optimize Marketing</h1>
            <p>Track, analyze and optimize your digital marketing performance.</p>
            <p>See what's working and what's not across all campaigns, mobile and web.</p>

            <div className="buttons">
                <input type="text" name="website URL" id="url" placeholder='Your website URL' />
                <button className='btnBlue'>Try KissMetrics</button>
            </div>
        </div>
      
    </div>
  )
}

export default Landing