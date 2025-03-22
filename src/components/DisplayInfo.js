import React from "react";
class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true,
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;
        console.log("listUsers", listUsers);
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((user, index) => {

                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                        <p>
                                            {index + 1} - Name: {user.name} - Age: {user.age}
                                        </p>
                                    </div>
                                );

                            })}
                    </div>}

            </div>
        );
    }
}
export default DisplayInfo;