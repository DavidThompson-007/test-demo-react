//class component
//function component
import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Eric', age: 26 },
            { id: 2, name: 'John', age: 30 },
            { id: 3, name: 'Jane', age: 28 },
        ],
    }
    render() {
        const myInfo = ['ab', 'c', 'c'];
        return (
            <div>
                <UserInfo />

                <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
            </div >
        )
    }
}
export default MyComponent;