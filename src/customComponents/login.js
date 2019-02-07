import React, { Component } from "react";
import './../multiMedia/css/normalize.css';
import './../multiMedia/css/style.css';
import './../multiMedia/css/grid.css';
import './../multiMedia/css/queries.css';
import './../multiMedia/css/ionicons.min.css';

import AllELements from './formElements'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeData: {
                emailId: null,
                password: null
            },
            formElementProps: [
                {
                    labelName: "Email",
                    id: "email",
                    elementType: "input",
                    type: "email",
                    placeholder: "Valid Email Id",
                    handlerInputChange: this.handleInputChange,
                },
                {
                    labelName: "Password",
                    id: "password",
                    elementType: "input",
                    type: "password",
                    placeholder: "Your Password",
                    handlerInputChange: this.handleInputChange,
                }]
        };
    }
    // Input Handling methods ------- START
    handleSubmit = event => {
        event.preventDefault();
        document.write('<p>' + JSON.stringify(this.state.employeeData) + '</p>')
    };

    handleInputChange = event => {
        event.preventDefault();

        let tempValue;
        tempValue = event.target.value;


        this.setState(this.state, () => {
            return { [event.target.name]: tempValue };
        });
    };
    // Input Handling methods ------- END

    render() {
        return (
            <div className="App">
                <div className="row">
                    <h1> Registration</h1>
                </div>

                <section className="section-form">
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                        {this.state.formElementProps.map(formElementProps => {
                            return (
                                <AllELements
                                    key={formElementProps.id}
                                    labelName={formElementProps.labelName}
                                    id={formElementProps.id}
                                    elementType={formElementProps.elementType}
                                    type={formElementProps.type}
                                    placeholder={formElementProps.placeholder}
                                    handlerInputChange={formElementProps.handlerInputChange}
                                    value={formElementProps.value}
                                />
                            );
                        })}
                        {/* -------------Reusable ---- Buttons----------------- */}
                        <AllELements
                            elementType="button"
                            type="submit"
                            value="Submit"
                            handlerSubmit={this.handleSubmit}
                        />

                        <AllELements
                            elementType="button"
                            type="reset"
                            value="Reset"
                            handlerSubmit={this.handleSubmit}
                        />
                    </form>
                </section>

                {/* --------------------------------End of form-------------------------------- */}
            </div>
        );
    }
}

export default Login;
