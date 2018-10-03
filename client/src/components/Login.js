import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    usuario: "",
    senha: "",
    error: ""
  };

  componentWillMount() {
    if (localStorage.getItem("atendente")) {
      this.props.history.push({
        pathname: "/painel",
        state: { nome: localStorage.getItem("atendente") }
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = async e => {
    e.preventDefault();

    const { usuario, senha } = this.state;
    const user = {
      usuario,
      senha
    };

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    });

    const data = await res.json();

    if (data.query !== "not ok") {
      const { nome } = data;
      localStorage.setItem("atendente", nome);
      this.props.history.push({
        pathname: "/painel",
        state: { nome: data.nome }
      });
    } else {
      this.setState({
        ...this.state,
        error: data.error
      });
      setTimeout(() => {
        this.setState({
          ...this.state,
          error: ""
        });
      }, 2000);
    }
  };

  render() {
    return (
      <Fragment>
        <div
          style={{
            display: "block",
            textAlign: "center",
            marginTop: 10 + "%"
          }}
        >
          <i className="fa fa-plus fa-9x" />
        </div>

        <div
          className="card shadow ml-auto mr-auto"
          style={{
            marginTop: 10 + "%",
            width: 500 + "px"
          }}
        >
          <div className="card-body">
            <form className="mt-4">
              <div className="form-group">
                <label className="float-right" htmlFor="usuario">
                  <i className="fa fa-user fa-2x" />{" "}
                </label>
                <input
                  type="text"
                  name="usuario"
                  className="form-control"
                  value={this.state.usuario}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="float-right" htmlFor="senha">
                  <i className="fa fa-key fa-2x" />{" "}
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="form-control"
                  value={this.state.senha}
                  onChange={this.onChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn float-right mt-2"
                style={{ backgroundColor: "#0078AA", color: "#FFFFFF" }}
                onClick={this.submitLogin}
              >
                Login
              </button>
            </form>
            <p className="text-danger">{this.state.error}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Login);
