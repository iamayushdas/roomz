import React, { Component } from 'react'
import { TableContext } from '../context'
import Loading from './Loading'
import Table from './Table'
import Title from './Title'
export default class FeaturedTables extends Component {
    static contextType = TableContext;
    render() {
        let { loading, featuredTables : tables } = this.context;
       
        tables = tables.map( table => { 
            return <Table key={table.id} table={table} />;
        })
        return (
            <section  className = "featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : tables}
                </div>
                <Loading />
            </section>
                
            
        )
    }
}
