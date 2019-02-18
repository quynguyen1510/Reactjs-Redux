import React from 'react';

class NoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           showAdding: false
        }
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = '';
    }
    handleShowAdding(){
        this.setState({
            showAdding: !this.state.showAdding
        });
    }
    handleClose() {
        this.setState({
            showAdding: false
        });
    }
    render() {
        if(this.state.showAdding){
            return(
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="enter your note" ref="txt"></input>
                    <br/>
                    <button>Add</button>
                    <button onClick={this.handleClose.bind(this)}>Close</button>
                </form>
            );
        }else{
            return(<button onClick={this.handleShowAdding.bind(this)}>+</button>);
        }
    }
}

export default NoteForm;