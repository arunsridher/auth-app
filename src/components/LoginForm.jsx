import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      await auth.login(email, password);
      window.location = "https://www.google.com/";
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="mx-auto col-md-6 my-5">
              <div className="card">
                <div className="card-header card-header-primary">
                  <i
                    className="d-block mx-auto text-center 2rem material-icons"
                    style={{ fontSize: "42px" }}
                  >
                    person
                  </i>
                  <h3 className="card-title text-center">Login Form</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="col px-5" style={this.style}>
                      {this.renderInput("email", "Email")}
                    </div>
                    <div className="col px-5" style={this.style}>
                      {this.renderInput("password", "Password", "password")}
                    </div>
                    <div className="col px-5 text-center">
                      {this.renderButton("Login")}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  style = {
    marginBottom: "35px",
  };
}

export default LoginForm;
