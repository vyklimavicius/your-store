import React from 'react';
import ItemDetail from './ItemDetail'

class ItemCart extends React.Component {

  render() {
    return (
      <div className="cart-Div">
      <img src="http://localhost:3000/cart.png" alt="cart" style={{width:'100px', position: 'relative', left: '700px', top: '20px'}} />
      {this.props.items.map(item => {
        return(
        <ItemDetail item={item} handleRemove={this.props.handleRemove}/>
      )
      })}
      </div>
    )
  }
}

export default ItemCart;
