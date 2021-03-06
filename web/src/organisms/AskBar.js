import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { withRouter } from "react-router-dom"
import axios from "axios"

// import LinkToProfile from "../atoms/LinkToProfile";

import helpers from "../helpers"

axios.defaults.headers.common["Authorization"] = helpers.getToken()

class AskBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      askTextarea: ""
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState ({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      title: this.state.askTextarea,
      user: this.props.user
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/questions`, payload)
      .then(response => {
        console.log(response.data);
        alert(`Asking success!`)
        this.props.history.push("/answer")
      })
      .catch(error => {
        console.log(error);
        alert(`${error}`)
      })
  }

  render() {
    // const user = this.props.user

    return (
      <Form onSubmit={this.handleSubmit}>
        {/* <h6>
          <LinkToProfile user={this.state.user} />asked
        </h6> */}
        <FormGroup>
          <Input
            type="textarea"
            name="askTextarea"
            id="askTextarea"
            placeholder="What is your question?"
            value={this.state.askTextarea}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="primary">Ask Question</Button>
      </Form>
    )
  }
}

export default withRouter(AskBar)

// () => (
//   <Form>
//     <h6>
//       <LinkToProfile user={USER} /> asked
//     </h6>
//     <FormGroup>
//       <Input
//         type="textarea"
//         name="askTextarea"
//         id="askTextarea"
//         placeholder="What is your question?"
//         onKeyDown={e => {
//           if (e.keyCode === 13 && !e.shiftKey) {
//             e.preventDefault();
//           }
//         }}
//       />
//     </FormGroup>
//     <Button color="primary">Ask Question</Button>
//   </Form>
// );
//
// export default AskBar;
