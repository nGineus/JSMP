import React, {PureComponent} from 'react';
import DeviceForm from '../components/DeviceForm';
import {addDevice} from '../api';

export default class DeviceAdd extends PureComponent {
  groupId = null;

  // constructor(props) {
  //   super(props);
  // }

  async componentDidMount() {
    this.groupId = this.props.match.params.groupId;
  };

  handleFormSubmit = async (device) => {
    await addDevice(device, this.groupId);
    window.history.back();
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                <li className="breadcrumb-item"><a href="#/devices">Devices</a></li>
                <li className="breadcrumb-item"><a href="#/groups">Groups</a></li>
                <li className="breadcrumb-item active" aria-current="page">Add device</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <DeviceForm onSubmit={this.handleFormSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}
