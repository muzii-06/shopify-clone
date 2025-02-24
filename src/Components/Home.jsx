import React from 'react'
import Announcement from './Announcement'
import Top from './Top'
import NavBar from './NavBar'
import HomePage from './HomePage'
import TopCategories from './TopCategories'
import CardContainer from './CardContainer'
import TrendingProducts from './TrendingProducts'
import YouTubee from './Youtubee'
import CustomerReviews from './CustomerReviews'
import BrandLogos from './BrandLogos'
import Banner from './Banner'
import Features from './Features'
import Articles from './Articles'
import Footer from './Footer'

const Home = () => {
  return (
    <>
     <Announcement/>
    <Top/>
    <NavBar />
    <HomePage/>
    <TopCategories />
    <CardContainer />
    <TrendingProducts />
    <YouTubee videoId="9no7Q4jYnsI" />
    <CustomerReviews />
    <BrandLogos />
    <Banner />
    <Features />
    <Articles />
    <Footer />
    </>
  )
}

export default Home