import React, {Component} from 'react';
import NoteComponent from "./note-component/note-component";

export default class NotesList extends Component {
  state = {
    list: this.props.list
  };

  constructor(props) {
    super(props);
    this.id = 3;

    setInterval(() => {
      this.id++;
      console.log(this.state.list);
      this.setState((state) => {
        return {
          list: [...state.list, {id: this.id, label: '+++ note', important: true}]
        }
      });
    }, 2000);
  }

  render() {

    return (
      <ul>
        {this.state.list.map((note) => {
          const {id} = note;
          return (<li key={id}><NoteComponent {...note}/></li>)
        })}
      </ul>)
  };

}
