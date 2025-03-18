//class component
//function component
import React from 'react';
class MyComponent extends React.Component {
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
    render() {
        return (
            <div>
                <div>
                    My name is {this.state.name} and I'm {this.state.age}
                    <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                    <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                </div>
            </div >
        )
    }
}
export default MyComponent;