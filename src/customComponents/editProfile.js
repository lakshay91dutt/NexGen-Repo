// /*
//      Employee
//              Profile
//                     Update
// */

// import React, { Component } from "react";
// import './../multiMedia/css/normalize.css';
// import './../multiMedia/css/style.css';
// import './../multiMedia/css/grid.css';
// import './../multiMedia/css/queries.css';
// import './../multiMedia/css/ionicons.min.css';


// //React module - To use predefined form elements
// import AllELements from '/home/lakshay/Desktop/WorkSpace/admin-console/src/customComponents/formElements';

// class ChangeEmpStatus extends Component {
//     constructor(props) {
//         super(props);

//         render() {
//             return (
//                 <div className="App">
//                     <div className="row">
//                         <h1>Candidate Registration</h1>
//                     </div>

//                     <section className="section-form">
//                         <form className="contact-form" onSubmit={this.handleSubmit}>
//                             {this.state.formElementProps.map(formElementProps => {
//                                 return (
//                                     <AllELements
//                                         key={formElementProps.id}
//                                         labelName={formElementProps.labelName}
//                                         id={formElementProps.id}
//                                         elementType={formElementProps.elementType}
//                                         type={formElementProps.type}
//                                         placeholder={formElementProps.placeholder}
//                                         handlerInputChange={formElementProps.handlerInputChange}
//                                         value={formElementProps.value}
//                                         readonly
//                                     />
//                                 );
//                             })}
//                             {/* -------------Marital Status----------------- */}
//                             <div className="row">
//                                 <div className="col span-1-of-3">
//                                     <label>Status</label>
//                                 </div>
//                                 <div className="col span-2-of-3">
//                                     <label>Married: </label>
//                                     <input
//                                         type="checkbox"
//                                         name="status"
//                                         value="married"
//                                         onChange={this.handleInputChange}
//                                         defaultChecked
//                                     />
//                                     <label>Single: </label>
//                                     <input
//                                         type="checkbox"
//                                         name="status"
//                                         value="Single"
//                                         onChange={this.handleInputChange}
//                                     />
//                                 </div>
//                             </div>
//                             {/* -------------Reusable ---- Buttons----------------- */}
//                             <AllELements
//                                 elementType="button"
//                                 type="submit"
//                                 value="Submit"
//                                 handlerSubmit={this.handleSubmit}
//                             />

//                             <AllELements
//                                 elementType="button"
//                                 type="reset"
//                                 value="Reset"
//                                 handlerSubmit={this.handleSubmit}
//                             />
//                         </form>
//                     </section>

//                     {/* --------------------------------End of form-------------------------------- */}
//                 </div>
//             );
//         }
//     }
// }
// export default ChangeEmpStatus;
