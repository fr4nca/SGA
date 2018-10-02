import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { createSocket } from "../api/socket";

class Painel extends Component {
  socket = createSocket();

  state = {
    atendente: ""
  };

  componentWillMount() {
    if (localStorage.getItem("atendente")) {
      this.setState({
        atendente: localStorage.getItem("atendente")
      });
    } else {
      this.props.history.push("/login");
    }
  }

  logout = () => {
    localStorage.removeItem("atendente");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <button
          onClick={this.logout}
          className="float-right mt-2 btn btn-dark btn-sm"
        >
          Logout
        </button>
        <h1 className="mt-3">Bem vindo, {this.state.atendente}</h1>
        <h2>Unidade</h2>
        <div className="mt-4 row">
          <div className="col-sm" id="atendimento">
            <i
              onClick={() => {
                this.props.history.push("/atendimento");
              }}
              className=" fa fa-comment-alt fa-4x"
              style={{ cursor: "pointer" }}
            />
            <small>Atendimento</small>
          </div>
          <div className="col-sm" id="monitor">
            <i className=" fa fa-desktop fa-4x" style={{ cursor: "pointer" }} />
            <small>Monitor</small>
          </div>
          <div className="col-sm" id="triagem">
            <i style={{ cursor: "pointer" }} className=" fa fa-print fa-4x" />
            <small>Triagem</small>
          </div>
          <div className="col-sm" id="configuracao">
            <i style={{ cursor: "pointer" }} className=" fa fa-cogs fa-4x" />
            <small>Configuracao</small>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Painel);
