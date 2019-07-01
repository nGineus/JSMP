import React, {Component} from 'react';
import './filter-component.scss';

export default class FilterComponent extends Component {

  constructor(props) {
    super(props);
    this.value = this.props.value || 'First';
  }


  setValue = (value) => {
    console.log('Value ', value.target.value);
  };

  render() {
    return (
      <input className="filter-input"
             type="text"
             placeholder={"Filter"}
             onChange={this.setValue}
             defaultValue={this.value}
      />
    );
  }
}
