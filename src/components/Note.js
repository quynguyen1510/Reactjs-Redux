import React from 'react';

class Note extends React.Component{

    removeNote(){
        var index = this.props.index;
        var handleRemove = this.props.handleRemove;
        handleRemove(index);
    }

    render() {
        return(
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default Note;