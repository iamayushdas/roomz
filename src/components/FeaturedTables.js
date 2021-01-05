import React, { Component } from 'react'
import { TableContext } from '../context'
export default class FeaturedTables extends Component {
    static contextType = TableContext
    render() {
        const {name, greeting} = this.context;
       
        return (
            <div>
                {greeting} {name} from featured rooms
            </div>
        )
    }
}
