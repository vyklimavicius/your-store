import React from 'react';
import { Button, Image } from 'react-bootstrap';


const ItemDetail = (props) => {

  return (

    <div className="Item">
    <h2>{props.item.name}</h2>
    <Image src={props.item.image} roundedCircle />
    <h3>{props.item.description}</h3>
    <h4>Price:${props.item.price}</h4>
    <br></br>
    <Button style={{backgroundColor: '#47464D', borderColor: 'grey', }} variant="primary" size="lg" value={props.item.id}>Buy</Button>
    </div>
  )
}

export default ItemDetail;
