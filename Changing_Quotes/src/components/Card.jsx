import React from 'react'

const Card = ({userRandom, colorRandom, clickButton}) => {
    
    /*const styleButton = {
      backgroundColor: colorRandom
    }*/



  return (
    <article className='card' style={{color: colorRandom}}>
        <h2 className='card-title'>{userRandom.quote}</h2>
        <p className='card-p'>{userRandom.author}</p>
        <button 
        className='card-btn'
        onClick={clickButton}
        style={{color: colorRandom}}>&#62;</button>

    </article>
  )
}

export default Card