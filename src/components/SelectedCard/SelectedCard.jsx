import React from 'react'
import "../SelectedCard/SelectedCard.scss"

const SelectedCard = ({item}) => {
  return (
    <>
      <div className='my-pop'>
        <h2>Актуальне</h2>
        <img src={item.img} />
        <h3>{item.price} грн</h3>
        <p>{item.disc}</p>
      </div>
    </>
  )
}

export default SelectedCard
