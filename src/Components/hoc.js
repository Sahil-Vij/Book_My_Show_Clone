import React from 'react'
import Homecarousel from './homecarousel'
import './hoc.css'

function Hoc() {
  return (
    <div className='container'>
        <section className='one'>
            <Homecarousel  genre={"upcoming"}/>
        </section>
        <section className='two'>
            <Homecarousel genre={"popular"}/>
        </section>
    </div>
  )
}

export default Hoc;