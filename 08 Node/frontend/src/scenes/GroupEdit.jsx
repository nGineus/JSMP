import React, {PureComponent} from 'react';
import {getGroupById, updateGroup} from '../api';
import GroupForm from "../components/GroupForm";
import GroupDevices from "./GroupDevices";

export default class GroupEdit extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      group: null
    };
  }

  async componentDidMount() {
    const {id} = this.props.match.params;

    this.setState({
      id: id,
      group: await getGroupById(id)
    });
  };

  handleFormSubmit = async (group) => {
    await updateGroup(this.state.id, group);
    window.history.back();
  };

  render() {
    const {group} = this.state;

    if (!group) {
      return null;
    }

    return (
      <div className="container">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#/">Home</a></li>
              <li className="breadcrumb-item"><a href="#/groupes">Groupes</a></li>
              <li className="breadcrumb-item active" aria-current="page">Edit group {this.state.group.name}</li>
            </ol>
          </nav>
        </div>
        <div className="container mb-5">
          <GroupForm onSubmit={this.handleFormSubmit} group={group}/>
        </div>
        <div className="long-margin-top">
          <GroupDevices onSubmit={this.handleFormSubmit} group={group}/>
        </div>
      </div>
    );
  }
}
