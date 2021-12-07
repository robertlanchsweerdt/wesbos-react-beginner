import { Component } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {
  render() {
    return (
      <>
        <form className='store-selector'>
          <h2>Please enter a store</h2>
          <input
            type='text'
            placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit Store</button>
        </form>
      </>
    );
  }
}
