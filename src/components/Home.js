import React from 'react';
import ItemList from './ItemList';
import ItemCart from './ItemCart';
import NavBar from './NavBar';
import ItemDetail from './ItemDetail';
import ItemSearch from './ItemSearch';


class Home extends React.Component {

    state = {
        items: [],
        itemsBought:[],
        itemsFilter:[],
        clicked: false,
        clickedObj: null,
        credit: 100,
        total: 0,
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

      handleBuy = (item) => {
        let price = item.price;
        this.setState({
          itemsBought: [...this.state.itemsBought, {...item}],
          credit: this.state.credit - price,
          total: this.state.total + price
        })
      }
      
    
      handleRemove = (item) => {
        let price = item.price;
        let newArray = [...this.state.itemsBought];
        let idx = newArray.indexOf(item);
        newArray.splice(idx,1)
        this.setState({
         itemsBought: newArray,
         credit: this.state.credit + price,
         total: this.state.total - price
        })
      }
    
      handleSearch = (word) => {
    
        const newArray = [...this.state.items].filter( item => {
          return item.name.toLowerCase().includes(word) || item.name.includes(word)
        })
        this.setState({
          itemsFilter: newArray
        })
      }

      handleFilter = (word) => {
        if (word === "All") {
          this.setState( prevState => ({
            itemsFilter: prevState.items
          }))
        } else {
          let newArray = [...this.state.items].filter(item => {
            return item.category.includes(word)
          })
          this.setState({
            itemsFilter: newArray
          })
        }
      }

    render(){
      // console.log(this.state.itemsBought);  
      
    return (
    <div className="Body">
      <NavBar credit={this.state.credit} handleFilter={this.handleFilter}/>
     <div className="Shelf">
       <img src="http://localhost:3000/storeShelf.png" alt="Store-shelf"/>
     </div>
     <ItemList items={this.state.itemsFilter} handleClick={this.handleItemClick}/>
     <div className="Item-filter">
     <ItemSearch handleSearch={this.handleSearch}/>
     </div>
     <div className="Item-cart">
       <ItemCart items={this.state.itemsBought} total={this.state.total} handleClick={this.handleRemove}/>
     </div>
     {this.state.clicked ? <ItemDetail item={this.state.clickedObj} handleBuy={this.handleBuy}/> : null}
    </div>
    )};
};

export default Home;
