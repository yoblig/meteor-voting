import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Items from '../api/Items';
import Item from './Item';

class App extends Component {

    addItems(event){
        event.preventDefault();
        const itemOne = this.refs.itemOne.value;
        const itemTwo = this.refs.itemTwo.value;

        if(itemOne != '' && itemTwo != ''){
            Items.insert({
            itemOne: {
                text: itemOne,
                value: 0
            },
            itemTwo: {
                text: itemTwo,
                value: 0
            }
        });
            this.refs.itemOne.value = '';
            this.refs.itemTwo.value = '';
        }
        
        
    }

  render(){
    return (
        <div>
            <header>
                LevelUp Voting
            </header>
            <main>

            <form onSubmit={this.addItems.bind(this)}>
                <input type='text' ref='itemOne' />
                <input type='text' ref='itemTwo' />
                <button type='submit'>Add Item</button>
            </form>

            {this.props.items.map((item) => {
                return(
                    <Item item={item} key={item._id} />
                )
            })}
            </main>
        </div>
    );
  }
}

export default createContainer(() => {
    return {
        items: Items.find({}).fetch()
    }
}, App);