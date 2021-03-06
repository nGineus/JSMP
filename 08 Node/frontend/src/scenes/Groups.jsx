import React, {PureComponent} from 'react';
import GroupItem from '../components/GroupItem';

const apiService = require('../api');

export default class Groups extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    this.refreshGroups();
  }

  refreshGroups = async () => {
    this.setState({
      groups: await apiService.getGroups()
    });
  };

  render() {
    const {groups} = this.state;

    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Groups</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-3 offset-9">
            <a href="#/groups/add" className="btn btn-primary float-right">Add group</a>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <table className="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th className="actions-column" scope="col">Actions</th>
              </tr>
              </thead>
              <tbody>
              {groups.map((group, index) =>
                <GroupItem key={index} group={group} index={index +1} onUpdate={this.refreshGroups}/>
              )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    )
  }
}
