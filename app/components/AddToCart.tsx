'use client';
import { Console } from 'console'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button onClick={()=>{console.log("clicked")}}>Add to cart</button>
    </div>
  )
}

export default AddToCart
