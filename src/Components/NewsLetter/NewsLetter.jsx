import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
          <h1>Get Exclusive Offers on your Email</h1>
          <p>Subscribed to our newsletter and stay up todate.</p>
          <div>
              <input type="email" placeholder='Your Email id' />
              <button>Subscribed</button>
          </div>
    </div>
  )
}

export default NewsLetter
