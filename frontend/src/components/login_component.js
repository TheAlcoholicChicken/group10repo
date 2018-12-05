import React, {Component} from 'react';
import '../styles/login.css'


class login_page extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log("Requesting login")
    fetch('/user/login/', {
      method: 'POST',
      body: data,
    }).then(response => {
        console.log(response)
        return response.json()
    }).then(response => {
        console.log(response)
        if ("Login successful." == response["response"] && response["user_id"] != "") {
            window.location.href = window.location.href + response["url"]
        } else {
            alert(response["response"])
        }
    });
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="password">Enter password</label>
          <input id="password" name="password" type="text" required/>

          <button>Send data!</button>
        </form>
      );
  }
}

export default login_page;
