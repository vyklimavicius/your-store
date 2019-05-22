import React from 'react';
import './App.css';
import ItemList from './components/ItemList'
import ItemCart from './components/ItemCart'
import Users from './components/Users'
import ItemFilter from './components/ItemFilter'


class App extends React.Component {

  state = {
    items: [],
    itemsBought:[],
    itemsFilter:[]
  }

  componentDidMount() {
    fetch('http://localhost:3000/v1/items')
    .then( response => response.json())
    .then( items => {
      this.setState({
        items: items,
        itemsFilter: items
      })
    })
  }

  // Methods

  handleBuy = (item) => {
    // let newArray = [...this.state.itemsBought];
    // newArray.push({...item, clicked: true})
    console.log(item);
    this.setState( prevState => ({
        itemsBought: [...prevState.itemsBought, {...item, clicked: true}]
      }))
  }

  handleRemove = (item) => {
    let newArray = [...this.state.itemsBought];
    let idx = newArray.indexOf(item);
    newArray.splice(idx,1)
    this.setState({
     itemsBought: newArray
    })
  }

  handleFilter = (word) => {

    const newArray = [...this.state.items].filter( item => {
      return item.name.toLowerCase().includes(word) || item.name.includes(word)
    })
    this.setState({
      itemsFilter: newArray
    })
  }



  render () {

   return (

    <body className='Body'>
    <Users />
    <ItemFilter handleFilter={this.handleFilter}/>
    <ItemList items={this.state.itemsFilter} handleBuy={this.handleBuy}/>
    <ItemCart items={this.state.itemsBought} handleRemove={this.handleRemove}/>
    </body>

   );
  }
}

export default App;
