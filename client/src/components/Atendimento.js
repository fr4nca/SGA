import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Atendimento extends Component {
  componentWillMount() {
    if (!localStorage.getItem("atendente")) {
      this.props.history.push("/login");
    }
  }

  render() {
    return <div />;
  }
}
export default withRouter(Atendimento);
