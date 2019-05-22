import React from 'react';
import { Button, Image } from 'react-bootstrap';


const ItemCard = (props) => {


  // const handleBuyClick = () => {
  //   props.handleBuy(props.item);
  // }

  // const handleRemove = () => {
  //   props.handleRemove(props.item);
  // }


  return (

    <div className="Item">
    <h2>{props.item.name}</h2>
    <Image src={props.item.image} roundedCircle />
    <h3>{props.item.description}</h3>
    <h4>Price:${props.item.price}</h4>
    {props.item.clicked ? <Button variant="primary" size="sm" value={props.item.id} onClick={() => props.handleRemove(props.item)}>Remove</Button> : <Button variant="primary" size="sm" value={props.item.id} onClick={() => props.handleBuy(props.item)}>Buy</Button>}
    </div>
  )
}

export default ItemCard;
