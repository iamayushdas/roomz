import React, { Component } from 'react'
const TableContext = React.createContext();
export default class TableProvider extends Component {
    state={
        greeting :'hello',
        name: 'Shivani'
    }
    render() {
        return (
            <TableContext.Provider value={{...this.state}}>
            {this.props.children}    
            </TableContext.Provider >
        )
    }
}

const TableConsumer = TableContext.Consumer;
export {TableProvider, TableConsumer, TableContext} 