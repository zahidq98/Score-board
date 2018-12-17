import React, {PureComponent} from 'react'

class AddPlayerForm extends PureComponent {
    state = {
        value:""
    }


playerInput = React.createRef();


handleSubmit = (e)=> {
    const {
        addPlayer, 
    } = this.props;

    e.preventDefault();
    addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
}

    render(){
        console.log(this.state.value)
        return (
         <form onSubmit={this.handleSubmit}>
            <input type ="text" 
            ref = {this.playerInput}
            placeholder="Enter a player's name"
            />
            <input type ="submit"
            value = "Add Player"
            />
        </form>
        )
    }
}


export default AddPlayerForm;