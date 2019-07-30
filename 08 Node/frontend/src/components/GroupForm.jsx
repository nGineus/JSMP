import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {groupPropType} from '../constants';

export default class GroupForm extends PureComponent {
  groupName;

  constructor(props) {
    super(props);
    this.groupName = this.props.group.name;
  }

  handleCancelClick = () => {
    window.history.back();
  };

  handleSubmit = (event) => {
    this.props.onSubmit({
      devices: this.props.group.devices.map(device => device.id),
      name: this.groupName,
    });
    event.preventDefault();
  };

  render() {
    const {group} = this.props.group ? this.props : {};

    return (
      <div className="container mb-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="deviceName">Group Name</label>
            <input type="text"
                   className="form-control"
                   id="groupName"
                   name="groupName"
                   placeholder="Group Name"
                   required
                   onChange={event => this.groupName = event.target.value}
                   defaultValue={group.name}/>
          </div>

          <div className="float-right margins">
            <button type="submit"
                    className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="button"
                    className="btn btn-warning"
                    onClick={this.handleCancelClick}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

GroupForm.defaultProps = {
  group: {
    name: '',
    devices: []
  }
};

GroupForm.propTypes = {
  group: groupPropType,
  onSubmit: PropTypes.func.isRequired
};
