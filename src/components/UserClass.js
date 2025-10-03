import React from "react";
import { data } from "react-router";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SaakshiSingh");
    const json = await data.json();
    console.log(json);
    const username = json.name;
    const location = json.location;
    const url = json.url;
    const avatar_url = json.avatar_url;
    this.setState({
      dataValue: {
        username: username,
        location: location,
        url: url,
        avatar_url: avatar_url,
      },
    });
  }
  render() {
    const { dataValue } = this.state;
    return (
      <div className="UserCard-inner">
        <img src={dataValue.avatar_url}></img>
        <h2>I am {dataValue.username}</h2>
        <h3>I live in {dataValue.location}</h3>
        <h3>You can contact me at {dataValue.url}</h3>
      </div>
    );
  }
}

export default UserClass;
