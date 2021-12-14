// a 'ref' allows you to reference an actual DOM node
// on the page.  You then get access to 

import { createRef, Component } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {

  myInput = createRef();

  handleSubmit = (e) =>{
    // stop form from submitting
    e.preventDefault();
    
    // get text from input field
    const storeName = this.myInput.current.value;

    // change page to new URL using props.history object
    // because the StorePicker component is a child of
    // Router.js, it passes props with access to the history object
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <>
        <form className='store-selector' onSubmit={this.handleSubmit}>
          <h2>Please enter a store</h2>
          <input
            type='text'
            ref= {this.myInput}
            placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit Store</button>
        </form>
      </>
    );
  }
}
