import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { costTotal: 0, orderIds: [] };
  }

  calculateTotalPrice = async () => {
    await this.setState({ orderIds: Object.keys(this.props.order) });
    this.setState({
      costTotal: this.state.orderIds.reduce((prevTotal, currentKey) => {
        const currentFish = this.props.fishes[currentKey];
        const countFish = this.props.order[currentKey];
        const isAvailable = currentFish && currentFish.status;

        if (isAvailable) {
          return prevTotal + countFish * currentFish.price;
        } else {
          return prevTotal;
        }
      }, 0),
    });
  };

  listOrder(id, fish, count) {
    if (fish.status) {
      return (
        <li key={id}>
          {count} lbs {fish.name}... {formatPrice(fish.price * count)}
        </li>
      );
    } else {
      return (
        <li key={id}>
          Sorry {fish ? fish.name : 'Fish'} is no longer available
        </li>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.order !== this.props.order) {
      this.calculateTotalPrice();
    }
  }

  render() {
    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>
          {this.state.orderIds.map((id) =>
            this.listOrder(id, this.props.fishes[id], this.props.order[id])
          )}
        </ul>
        <div className='total'>
          Total:
          <strong>{formatPrice(this.state.costTotal)}</strong>
        </div>
      </div>
    );
  }
}
