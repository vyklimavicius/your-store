import React from 'react';
import ItemList from './ItemList';
import ItemCart from './ItemCart';
import ItemFilter from './ItemFilter';
import NavBar from './NavBar';
import ItemDetail from './ItemDetail';


class Home extends React.Component {

    state = {
        items: [],
        itemsBought:[],
        itemsFilter:[],
        clicked: false,
        clickedObj: null,
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
    
      handleItemClick = (obj) => {
        let idx = [...this.state.itemsFilter].indexOf(obj);
        let newArray = [...this.state.itemsFilter];
        newArray[idx] = {...obj, clicked: true};
        this.setState({
          itemsFilter: newArray,
          clicked: !this.state.clicked,
          clickedObj: obj
        })
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

    render(){
    return (
    <div className="Body">
      <NavBar />
     <div className="Shelf">
       <img src="http://localhost:3000/storeShelf.png" alt="Store-shelf"/>
     </div>
     <ItemList items={this.state.itemsFilter} handleClick={this.handleItemClick}/>
     <div className="Item-filter">
     <ItemFilter handleFilter={this.handleFilter}/>
     </div>
     <div className="Item-cart">
       <ItemCart items={this.state.itemsBought} />
     </div>
     {this.state.clicked ? <ItemDetail item={this.state.clickedObj}/> : null}
    </div>
    )};
};

export default Home;
