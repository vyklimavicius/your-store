import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';


const ItemFilter = (props) => {

  // Inline styling

  let h1 = {
    marginTop: '200px',
    marginLeft: '10px'
  }

  let img = {
    width: '30px'
  }

  // Functions

  // const takeFilter = (e) => {
  //   let word = e.target.value;
  //   props.handleFilter(word);
  // }

  return (

    <div>
    <input style={h1} type="text" placeholder="Filter by name" onChange={ (e) => props.handleFilter(e.target.value) }></input>
    <img style={img} src={'http://localhost:3000/searchIcon.jpg'} />
    </div>

  )

}

export default ItemFilter;
