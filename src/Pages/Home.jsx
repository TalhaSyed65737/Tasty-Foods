import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CategoryMenu/>
    <FoodItems/>
    <Cart/>
    <Footer/>
    </>
  )
}

export default Home