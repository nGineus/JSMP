import React, {Component} from 'react';
import './notes-list-component.scss';
import NoteComponent from "./note-component/note-component";

export default class NotesList extends Component {
    state = {
        list: this.props.list,
        mode: this.props.mode
    };

    render() {

        return (
            <fragment>
                <h5 className='note-list__title'>{this.state.mode}</h5>
                <div className='note-list__wrapper'>
                    {this.state.list.map((note) => {
                        let {id, noteProps} = {...note};
                        debugger;
                        return (<NoteComponent key={id} {...noteProps}/>)
                    })}
                </div>
            </fragment>)
    };

}
