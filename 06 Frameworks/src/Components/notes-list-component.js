import React from 'react';
import NoteElement from "./note-component";

const NotesList = ({list}) => {
  console.log('List ', list);
  return (
    <ul>
      {list.map((note) => {
        const {id} = note;
        return (<li key={id}><NoteElement {...note}/></li>)
      })}
    </ul>
  );
};

export default NotesList;
