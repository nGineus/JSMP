import React, {Component} from 'react';
import DeviceItem from '../components/DeviceItem';
import {getGroupById} from '../api';

export default class GroupDevices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      group: props.group,
    }
  }

  componentDidMount() {
    this.refreshDevices(this.state.group.id);
  }

  refreshDevices = async (id) => {
    this.setState({
      group: await getGroupById(id),
    });
  };

  render() {
    return (
      <div className="container">

          <div className="col">
            <table className="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
              </thead>
              <tbody>
              {this.state.group.devices.map((device, index) =>
                <DeviceItem
                  key={device.id}
                  groupId={this.state.group.id}
                  device={device}
                  index={index + 1}
                  onUpdate={this.refreshDevices}/>
              )}
              </tbody>
            </table>

          </div>

        <div className="col-4 offset-8">
          <a href={'#/devices/add/' + this.state.group.id}
             className="btn btn-primary float-right">
            Add device into group
          </a>
        </div>

      </div>
    )
  }
}
