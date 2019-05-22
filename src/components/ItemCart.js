import React from 'react';
import ItemCard from './ItemCard'

class ItemCart extends React.Component {

  render() {
    return (
      <div className="Item-cart">
      <h1>Cart</h1>
      {this.props.items.map(item => {
        return(
        <ItemCard item={item} handleRemove={this.props.handleRemove}/>
      )
      })}
      </div>
    )
  }
}

export default ItemCart;
