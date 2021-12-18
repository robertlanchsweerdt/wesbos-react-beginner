import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { desc, image, name, price, status } = this.props.fish;

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <p>{status}</p>
        <button
          disabled={!status}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {status ? 'Add to cart' : 'Sold out'}
        </button>
      </li>
    );
  }
}
