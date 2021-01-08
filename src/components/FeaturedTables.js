import React, { Component } from 'react'
import { TableContext } from '../context'
import Loading from './Loading'
export default class FeaturedTables extends Component {
    static contextType = TableContext
    render() {
        const {featuredTables : tables } = this.context;
       console.log(tables)
        return (
            <div>
                from featured rooms
                <Loading />
            </div>
        )
    }
}
