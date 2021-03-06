import React, { PureComponent } from 'react';
import { createGroup } from '../api';
import GroupForm from "../components/GroupForm";

export default class GroupAdd extends PureComponent {

    handleFormSubmit = async (group) => {
        await createGroup(group);
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
                                <li className="breadcrumb-item"><a href="#/groups">Groups</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Add group</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <GroupForm onSubmit={this.handleFormSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}
