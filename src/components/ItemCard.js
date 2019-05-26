import React from 'react';
import { Image } from 'react-bootstrap';

const  ItemCard = (props) => {

        
    
        return (
            <div onClick={() => props.handleClick(props.item)}>
             <h1 style={{fontSize:'20px'}}>{props.item.name}</h1>
             <Image src={props.item.image} alt={props.item.name} roundedCircle />
            </div>
        );
}


export default ItemCard;
