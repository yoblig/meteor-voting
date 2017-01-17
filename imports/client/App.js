import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Items from '../api/Items';
import Item from './Item';

class App extends Component {
  render(){
    return (
        <div>
            <header>
                LevelUp Voting
            </header>
            <main>
            {this.props.items.map((item) => {
                return(
                    <Item item={item} />
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