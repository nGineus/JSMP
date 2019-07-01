import React from 'react';
import NoteComponent from "./note-component/note-component";

export default class NotesList extends React.Component {

  list = this.props.list;

  render() {

    return (
      <ul>
        {this.list.map((note) => {
          const {id} = note;
          return (<li key={id}><NoteComponent {...note}/></li>)
        })}
      </ul>
    );
  };

}
