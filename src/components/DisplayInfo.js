import React from "react";
class DisplayInfo extends React.Component {
    render() {

        const { listUsers } = this.props;
        console.log("listUsers", listUsers);
        return (
            <div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <p>
                                    {index + 1} - Name: {item.name} - Age: {item.age}
                                </p>
                            </div>
                        );
                    })}
                {/* <h1>My Information</h1>
                {/* <h1>Display My Information</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Location: {this.props.location}</p> */}
            </div>
        );
    }
}
export default DisplayInfo;