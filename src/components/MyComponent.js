//class component
//function component
import React from 'react';

import DisplayInfo from './DisplayInfo';
import AddUserInfo from './AddUserInfo';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Eric', age: 16 },
            { id: 2, name: 'John', age: 30 },
            { id: 3, name: 'Jane', age: 28 },
        ],
    }
    handleAddNewUser = (userObj) => {
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // console.log('check: ', listUsersNew);
        this.setState({
            listUsers: [...this.state.listUsers, userObj]
            // listUsers: listUsersNew
        })
    }
    render() {

        return (
            <div>

                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfo
                    listUsers={this.state.listUsers}

                />
            </div >
        )
    }
}
export default MyComponent;