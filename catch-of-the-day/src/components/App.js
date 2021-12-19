import { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../firebase';

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

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };

    // either add to the state or update (increment) to the state
    order[key] = order[key] + 1 || 1;

    // call setState to update the state object
    this.setState({ order });
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((key) => {
              return (
                <Fish
                  key={key}
                  index={key}
                  fish={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
