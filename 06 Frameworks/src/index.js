import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './Components/header-component/header-component';
import FilterComponent from './Components/filter-component/filter-component';
import NotesList from './Components/notes-list-component/notes-list-component';

const items = [
  {id: 1, label: 'First note', important: false},
  {id: 2, label: 'Second note', important: false},
  {id: 3, label: 'Third note', important: true}
];


const App = () => {
  return (
    <div>
      <HeaderComponent/>
      <FilterComponent/>
      <NotesList list={items}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));

