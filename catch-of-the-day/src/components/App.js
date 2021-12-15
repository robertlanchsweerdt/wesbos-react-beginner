import { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

export default class App extends Component {
  // using state as a property
  state = { fishes: {}, order: {} };

  addFish = (fish) => {
    console.log('adding a fish');

    // Make a copy of the existing state
    const fishes = { ...this.state.fishes };

    // Add fish 'key' and set it to the new fish obj that we're creating
    // every addFish will have a key with an obj value
    fishes[`fish${Date.now()}`] = fish;

    // set new fish obj to state
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
