import React from 'react';
import NoteComponent from "./note-component/note-component";

const NotesList = ({list}) => {
  console.log('List ', list);
  return (
    <ul>
      {list.map((note) => {
        const {id} = note;
        return (<li key={id}><NoteComponent {...note}/></li>)
      })}
    </ul>
  );
};

export default NotesList;
