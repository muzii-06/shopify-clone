import React from 'react'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
    <div className="container-fluid p-3 ">
        <div className="row justify-content-between">
            <div className="col-lg-4">
            <img width={"75%"} src="https://flexon-demo.myshopify.com/cdn/shop/files/banner-1.png?v=1732511167&width=1500x" alt="" />
            <p className='text-uppercase mt-3 text-secondary '>Deal of the Day</p>
            <h3 className='display-4 fw-bold'>Eagles soar in
            Playoff thriller</h3>
            <button className="shop border-0 mt-4 text-white  ">Shop Now</button>
            </div>
            <div className="col-lg-7">
            <img width={"100%"} src="https://flexon-demo.myshopify.com/cdn/shop/files/banner-2.png?v=1732511093&width=750" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage