/*
    Candidate
            Registration 
*/

import React, { Component } from "react";
import './../multiMedia/css/normalize.css';
import './../multiMedia/css/style.css';
import './../multiMedia/css/grid.css';
import './../multiMedia/css/queries.css';
import './../multiMedia/css/ionicons.min.css';


//React module - To use predefined form elements
import AllELements from '/home/lakshay/Desktop/WorkSpace/admin-console/src/customComponents/formElements';
import { ChangeEmpStatus as UserData } from '/home/lakshay/Desktop/WorkSpace/admin-console/src/customComponents/editProfile';

//Node module - to write Form data into local JSON file
import ProcessRecords from '/home/lakshay/Desktop/WorkSpace/admin-console/src/dataFiles/dataFileOperations';
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: {
        firstName: null,
        lastName: null,
        emailId: null,
        mobile: null,
        dob: null,
        address: null,
        designation: null,
        department: null,
        ctc: null,
        status: null,
        fileUrl: null
      },
      formElementProps: [
        {
          labelName: "Applicant ID",
          id: "applicantId",
          elementType: "input",
          type: "text",
          placeholder: "Unique Registration Id",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "First Name",
          id: "firstName",
          elementType: "input",
          type: "text",
          placeholder: "First Name",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "Last Name",
          id: "lastName",
          elementType: "input",
          type: "text",
          placeholder: "Last Name",
          handlerInputChange: this.handleInputChange
        },
        {
          labelName: "Email ID",
          id: "emailId",
          elementType: "input",
          type: "email",
          placeholder: "Valid Email Id",
          handlerInputChange: this.handleInputChange
        },
        {
          labelName: "Mobile Number",
          id: "mobile",
          elementType: "input",
          type: "text",
          placeholder: "Primary Contact Number",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "Date Of Birth",
          id: "dob",
          elementType: "input",
          type: "date",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "Address",
          id: "address",
          elementType: "textarea",
          type: "text",
          placeholder: "Permanent Address",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "Resume Upload",
          id: "file",
          elementType: "input",
          type: "file",
          accept: ".pdf",
          handlerInputChange: this.handleInputChange,
        },
        {
          labelName: "Department",
          id: "department",
          elementType: "dropdown",
          handlerInputChange: this.handleInputChange,
          select: [
            { optName: "Android", optValue: "android" },
            { optName: "IOS", optValue: "ios" },
            { optName: "Web Development", optValue: "web-dev" },
            { optName: "DevOps", optValue: "devops" }
          ],
        }
      ]
    };
  }

  // Input Handling methods ------- START
  handleSubmit = event => {
    event.preventDefault();
    let temp = this.state;

    return (<UserData attr={temp}></UserData>);
  };

  handleInputChange = event => {
    event.preventDefault();

    let tempValue;

    if (event.target.name === "fileUrl") {
      tempValue = event.target.files[0];
    } else {
      tempValue = event.target.value;
    }

    this.setState(this.state, () => {
      return { employeeData: { firstName: tempValue } };
    });
  };
  // Input Handling methods ------- END

  render() {
    return (
      <div className="App">
        <div className="row">
          <h1>Candidate Registration</h1>
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
            {/* -------------Marital Status----------------- */}
            <div className="row">
              <div className="col span-1-of-3">
                <label>Status</label>
              </div>
              <div className="col span-2-of-3">
                <label>Married: </label>
                <input
                  type="checkbox"
                  name="status"
                  value="married"
                  onChange={this.handleInputChange}
                  defaultChecked
                />
                <label>Single: </label>
                <input
                  type="checkbox"
                  name="status"
                  value="Single"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
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

export default App1;
