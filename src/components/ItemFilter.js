import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';


const ItemFilter = (props) => {

  // Inline styling

  let h1 = {
    width: '258px',
    height: '100px',
    // borderLeft: '2px solid black',
    borderRight: '1px solid black',
    // borderBottom: '2px solid black',
    borderTop: '1px solid black',
    textAlign: 'center',
    fontFamilyStyle : 'Oswald',
    color: 'dark-grey',
    fontSize: '25px'
  }

  // let img = {
  //   width: '30px'
  // }

  // Functions

  return (

    <div>
      <input style={h1} type="text" placeholder="SEARCH" onChange={ (e) => props.handleFilter(e.target.value) }></input>
    </div>
  )
}

export default ItemFilter;
