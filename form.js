import React, { Component } from 'react';

class CourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finstitutionname: '',
            fsyllabus: '',
            fdepartment: 'CSC',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', this.state);
        // You can perform additional actions here, like sending the data to a server.
    }

    render() {
        return (
            <div>
                <div className="titleBig">
                    <h2>
                        <u>Course Form:</u>
                    </h2>
                </div>
                <div className="box">
                    <div id="real">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="finstitutionname">
                                <b>Enter Name of Institution that Offers the Course:</b>
                            </label><br />
                            <input
                                type="text"
                                id="finstitutionname"
                                className="finstitutionname"
                                name="finstitutionname"
                                value={this.state.finstitutionname}
                                onChange={this.handleInputChange}
                            /><br />

                            <label htmlFor="fsyllabus">
                                <b>Attach Syllabus in PDF form:</b>
                            </label><br />
                            <input
                                type="file"
                                id="fsyllabus"
                                className="fsyllabus"
                                name="fsyllabus"
                                value={this.state.fsyllabus}
                                onChange={this.handleInputChange}
                            /><br />

                            <label htmlFor="fdepartment">
                                <b>Enter 3 letter Code for the department at Centre to which you're hoping to transfer credit: </b>
                            </label>
                            <select
                                name="fdepartment"
                                id="fdepartment"
                                className="fdepartment"
                                value={this.state.fdepartment}
                                onChange={this.handleInputChange}
                            >
                                <option value="CSC">CSC</option>
                                <option value="MUS">MUS</option>
                                <option value="ARS">ARS</option>
                                <option value="PHS">PHS</option>
                                <option value="HIS">HIS</option>
                                <option value="DLM">DLM</option>
                                <option value="FLM">FLM</option>
                                <option value="SOC">SOC</option>
                            </select><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default form;
