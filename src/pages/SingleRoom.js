import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {TableContext} from '../context' 
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor (props){
        super(props)
        // console.log(this.props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
            
        };
    }

    static contextType = TableContext;
    componentDidMount(){

    }
    render() {
        const {getTable} = this.context;
        const table = getTable(this.state.slug);
        console.log(table);
        if(!table){
            return <div className="error">
                <h3>no such table could be found...</h3>
                <Link to='/tables' className="btn-primary">Back to tables</Link>
            </div>
        }

        const { name, description,capacity,size,price,pets,extras,breakfast,images } = table
        const [mainImg, ...defaultImg] = images;
        return (
        <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} table`}>
                    <Link to = "/tables" className = "btn-primary">
                        back to tables
                    </Link>
                </Banner>
            </StyledHero>
            <section className = "single-room">
                <div className = "single-room-images">
                    {defaultImg.map((item, index) => {
                       return <img key={index} src={item} alt = {name} />
                    })}
                </div>
                <div className = "single-room-info">
                    <article className = "desc">
                        <h3>details</h3>
                        <p>{description}</p>
                        </article>
                        <article className = "info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6 >size: ${size} SQFT</h6>
                            <h6>max-capacity: {
                                capacity > 1? `${capacity} people` : `${capacity} person`} 
                            </h6>
                            <h6>{ pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6> 
                        </article>   
                </div>
            </section>
            <section className = "room-extras">
                <h6>extras</h6>
                <ul className = "extras">
                    {extras.map((item,index) => {
                        return <li key={index}> -{item}</li>
                    })}
                </ul>
            </section>
        </>
        );
    }
}
