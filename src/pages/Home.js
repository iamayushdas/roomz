import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <Hero>
            <Banner title="luxurious table" subtitle="deluxe table starting at 499 INR">
                <Link to='/rooms' className="btn-primary">
                    Our tables
                </Link>
            </Banner>
        </Hero>
    )
}

export default Home
