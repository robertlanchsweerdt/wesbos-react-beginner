import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const costTotal = orderIds.reduce((prevTotal, currentKey) => {
      const currentFish = this.props.fishes[currentKey];
      const countFish = this.props.order[currentKey];
      const isAvailable = currentFish && currentFish.status;

      console.log(orderIds);

      if (isAvailable) {
        return prevTotal + countFish * currentFish.price;
      } else {
        return prevTotal;
      }
    }, 0);

    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>
          {orderIds.map((id) =>
            listOrder(id, this.props.fishes[id], this.props.order[id])
          )}
        </ul>
        <div className='total'>
          Total:
          <strong>{formatPrice(costTotal)}</strong>
        </div>
      </div>
    );
  }
}

const listOrder = (id, fish, count) => {
  if (fish.status) {
    return (
      <li key={id}>
        {count} lbs {fish.name}
        {formatPrice(fish.price * count)}
      </li>
    );
  } else {
    return (
      <li key={id}>Sorry {fish ? fish.name : 'Fish'} is no longer available</li>
    );
  }
};
