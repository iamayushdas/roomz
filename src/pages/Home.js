import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedTables from '../components/FeaturedTables'
import Button from '../components/StyledHero'
function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious table" subtitle="deluxe table starting at 499 INR">
                <Link to='/tables' className="btn-primary">
                    Our tables
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedTables />
        <Button>Hello</Button>
        </>
    )
}

export default Home
