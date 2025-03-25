import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';
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
            <div className="display-info-container">
                <img src={logo}></img>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "Hide list users" : "Show list users"}</span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((user, index) => {

                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                        <div>
                                            My name's {user.name}
                                        </div>
                                        <div>
                                            My age's {user.age}
                                        </div>
                                        <hr></hr>
                                    </div>
                                );

                            })}
                    </>
                }

            </div>
        );
    }
}
export default DisplayInfo;