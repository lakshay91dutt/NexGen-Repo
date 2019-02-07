import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App1 from './customComponents/registerEmployee';
import Login from './customComponents/login'
class App extends Component {
    constructor(props) {
        super(props);
    }
    loadApp1 = (event) => {
        event.preventDefault();
        console.log("Clicked");
        ReactDOM.render(<Login />, document.getElementById('root'));
    }
    defaultMsg = (event) => {
        event.preventDefault();
        document.write('<h1> Work in progress</h1>');
    }
    render() {

        return (
            <div>
                <div className="hero-text-box" key="login">
                    <h1>Login As</h1>
                    <a className="btn btn-ghost" href="register" key="admin" onClick={this.loadApp1}>Administrator</a>
                    <a className="btn btn-full" href="editEmployee" key="emp" onClick={this.loadApp1}>Employee</a>
                </div>
            </div>);
    }
}
export default App;
