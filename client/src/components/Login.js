import React, { Component, Fragment } from "react";

class Login extends Component {
  state = {
    usuario: "",
    senha: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
    console.log(this.state);
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
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
