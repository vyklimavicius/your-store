import React from 'react';
import ItemCard from './ItemCard';


class ItemList extends React.Component {



  render(){

   
    return(

      <div className="Item-list">
      {/*{items}*/}
      {this.props.items.map(item => {
        return(
        <ItemCard item={item} handleClick={this.props.handleClick} />
      )
      })}
      </div>

    )


  }
}

export default ItemList;
