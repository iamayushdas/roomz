import React, { Component } from 'react'
import items from './data'
const TableContext = React.createContext();
export default class TableProvider extends Component {
  state = {
    tables: [],
    sortedTables: [], 
    featuredTables: [],
    loading: true
  };

  // getData

  componentDidMount() {
    // this.getData
    let tables = this.formatData(items);
    let featuredTables = tables.filter(table => 
      table.featured === true
    );
    this.setState({
      tables,
      featuredTables,
      sortedTables: tables,
      loading: false
    })
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let table = { ...item.fields, images, id };
      return table;
    });
    return tempItems;
  }

  getTable = (slug) => {
    let tempTables = [...this.state.tables];
    const table = tempTables.find((table)=> table.slug === slug);
    return table;
  }

  render() {
    return (
      <TableContext.Provider value={{ ...this.state, getTable: this.getTable }}>
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const TableConsumer = TableContext.Consumer;
export {TableProvider, TableConsumer, TableContext} 