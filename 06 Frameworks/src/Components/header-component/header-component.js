import React, {Component} from 'react';
import './header-component.scss';

export default class HeaderComponent extends Component {

    render() {
        return (
            <div className="header-style">
                {/*<h1>Nots App</h1>*/}
                <div className="btn-group action-block">
                    <button type="button"
                            className="btn btn-info"
                    >All
                    </button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >Completed
                    </button>
                    <button type="button"
                            className="btn btn-outline-secondary"
                    >Archived
                    </button>
                </div>
            </div>
        );
    };
}
