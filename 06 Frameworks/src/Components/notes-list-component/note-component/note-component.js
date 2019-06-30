import React from 'react';

import './note-component.scss'

const NoteComponent = ({label, important}) => {
  return (
    <div className='note-style'>
      <span className={important ? 'active' : ''}>{label}</span>
      <div className="btn-group note-action">
        <button type="button"
                className="btn btn-info"
        ><i className="fa fa-exclamation"/>
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
        ><i className="fa fa-trash-o"/>
        </button>
      </div>
    </div>
  );
};

export default NoteComponent;
