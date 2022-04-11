import { Component } from 'react';
import './search-box-styles.css';

class SearchBox extends Component {

  render(){
    return (
      <input 
          className={`search-box ${this.props.className}`}
          type="search" 
          placeholder={this.props.placeholder}
          // will run every time the input changes
          onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;