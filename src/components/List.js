import React from 'react';
import Note from './Note.js'
import NoteForm from './NoteForm.js'
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mang: ['Android','Ios','Nodejs']
        }
    }
    removeNote(index) {
        this.state.mang.splice(index,1);
        this.setState(
            this.state
        );
    }
    addNote(note){
        this.state.mang.push(note);
        this.setState(
            this.state
        );
    }
    render() {
        return(
            <div>
                <NoteForm handleAdd={this.addNote.bind(this)}/>
               {this.state.mang.map((note,index) => <Note index={index} handleRemove={this.removeNote.bind(this)} key={index}>{note}</Note>)}
            </div>
        );
    }
}

export default List;