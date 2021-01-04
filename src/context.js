import React, { Component } from 'react'
const TableContext = React.createContext();
export default class TableProvider extends Component {
    state={

    }
    render() {
        return (
            <TableContext.Provider value="hello">
            {this.props.children}    
            </TableContext.Provider >
        )
    }
}

const TableConsumer = TableContext.Consumer;
export {TableProvider, TableConsumer, TableContext} 