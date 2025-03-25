import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: 'HarryPhamDev',
        address: 'Hoi Dan IT',
        age: 26
    }
    handleClick = (event) => {
        console.log('>>Click me my button');
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
            // address: 'Hoi Dan IT',
            // age: 26
        })
    }
    handleOnMouseOver(event) {
        // console.log(event.pageX);
    }
    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                <div>
                    My name is {this.state.name} and I'm {this.state.age}
                    {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                    <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                        <label>Your name: </label>
                        <input value={this.state.name} type='text' onChange={(event) => this.handleOnChangeInput(event)} />
                        <label>Your age: </label>
                        <input value={this.state.age} type='text' onChange={(event) => this.handleOnChangeAge(event)} />
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        );
    }
}
export default AddUserInfo;
