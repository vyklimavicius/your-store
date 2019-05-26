import React from 'react';
import ItemCard from './ItemCard';

class ItemCart extends React.Component {

  

  render() {
    return (
      <div className="cart-Div">
      {/* <img src="http://localhost:3000/cart.png" alt="cart" style={{width:'100px', position: 'relative', left: '700px', top: '20px'}} /> */}
      {this.props.items.map(item => {
        return(
        <ItemCard item={item} handleClick={this.props.handleClick}/>
      )
      })}
      <div className="total">
      <h1>TOTAL</h1>
      <h2>${this.props.total}</h2>
      </div>
      </div>
    )
  }
}

export default ItemCart;
