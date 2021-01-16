import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {TableContext} from '../context' 

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

        const {name, description,capacity,size,price,extras,breakfast,images} =table
        return <Hero hero="roomsHero">
            <Banner title={`${name} table`}>
                <Link to = "/tables" className = "btn-primary">
                    back to tables
                </Link>
            </Banner>
        </Hero>
        return (
            <div>
                hello from single {table.name}
            </div>
        )
    }
}
