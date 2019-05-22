import React from 'react';
import { Button } from 'react-bootstrap';
import ItemCard from './ItemCard'


class ItemList extends React.Component {



  render(){

    // let items = this.props.items.map(item => <ItemCard item={item} handleBuy={this.props.handleBuy} />);


    return(

      <div className="Item-list">
      <h1>Store Shelf</h1>
      {/*{items}*/}
      {this.props.items.map(item => {
        return(
        <ItemCard item={item} handleBuy={this.props.handleBuy} />
      )
      })}
      </div>

    )


  }
}

export default ItemList;
