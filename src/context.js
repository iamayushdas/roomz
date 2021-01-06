import React, { Component } from 'react'
import items from './data'
const TableContext = React.createContext();
export default class TableProvider extends Component {
  state = {
    tables: [],
    sortedRooms: [],
    featuredTables: [],
    loading: true,
  };

  // getData

  componentDidMount() {
    let tables = this.formatData(items);
    console.log(tables);
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

  render() {
    return (
      <TableContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const TableConsumer = TableContext.Consumer;
export {TableProvider, TableConsumer, TableContext} 