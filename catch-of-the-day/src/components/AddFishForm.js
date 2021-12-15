import React, { createRef, Component } from 'react';

export default class AddFishForm extends Component {
  nameRef = createRef();
  priceRef = createRef();
  statusRef = createRef();
  descRef = createRef();
  imageRef = createRef();

  onSubmit = (e) => {
    e.preventDefault();

    // create object
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), // using parseFloat for money
      status: Boolean(this.statusRef.current.value),
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    this.props.addFish(fish);

    // refresh form after submittal
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className='fish-edit' onSubmit={this.onSubmit}>
        <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
        <input
          name='price'
          ref={this.priceRef}
          type='text'
          placeholder='Price'
        />
        <select name='status' ref={this.statusRef}>
          <option value='true'>Fresh!</option>
          <option value='false'>Sold Out!</option>
        </select>
        <textarea name='desc' ref={this.descRef} placeholder='Desc' />
        <input
          name='image'
          ref={this.imageRef}
          type='text'
          placeholder='Image'
        />
        <button type='submit'>+ Add Fish</button>
      </form>
    );
  }
}
