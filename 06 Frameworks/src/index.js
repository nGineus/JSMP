import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import HeaderComponent from './Components/header-component/header-component';
import FilterComponent from './Components/filter-component/filter-component';
import NotesList from './Components/notes-list-component/notes-list-component';

const items = [
    {id: 1, label: 'First note', important: false},
    {id: 2, label: 'Second note', important: false},
    {id: 3, label: 'Third note1', important: false},
    {id: 4, label: 'Third note2', important: true},
    {id: 5, label: 'Third note3', important: true},
    {id: 6, label: 'Third note4', important: false},
    {id: 7, label: 'Third note5', important: true},
];


const App = () => {
    return (
        <div className='wrapper'>
            <HeaderComponent/>
            <FilterComponent/>
            <NotesList mode={'All'} list={items}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

