import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import "./stylesheet.css"


function App() {
    const [institutionName, setInstitutionName] = useState('');
    const [syllabusFile, setSyllabusFile] = useState('');
    const [department, setDepartment] = useState('CSC');

    //This function is just for submit (Placing it here since its too much)
    const handleSubmit = (e) => {
        e.preventDefault(); //I dont know but this prevent console from resetting???
        console.log('Institution Name:', institutionName);
        console.log('Syllabus File:', syllabusFile);
        console.log('Department:', department);

        alert('Thank you for submitting!');

        setInstitutionName('');
        setSyllabusFile(null); //FIXED THIS PLEASE
        setDepartment('CSC');
    };

    return (
        <div class="box">
        <div class="titleBig"> <h2> <u>Course Form:</u></h2></div>
            <div className="form">
                <form onSubmit={handleSubmit}>
            <label htmlFor="finstitutionname"><b>Enter Name of Institution that Offers the Course:</b></label><br />
                <input type="text"
                    id="finstitutionname"
                    className="finstitutionname"
                    name="finstitutionname"
                    value={institutionName}
                    onChange={e => setInstitutionName(e.target.value)}
                    /><br />
            <label htmlFor="fsyllabus"><b>Attach Syllabus in PDF form:</b></label><br />
                <input type="file"
                    id="fsyllabus"
                    className="fsyllabus"
                    name="fsyllabus"
                    onChange={e => setSyllabusFile(e.target.files[0]) }/><br />
            <label htmlFor="fdepartment"><b>Enter 3 letter Code for the department at Centre to which you're hoping to transfer credit: </b></label>
                <select name="fdepartment"
                    id="fdepartment"
                    className="fdepartment"
                    value={department}
                    onChange={e => setDepartment(e.target.value) }
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
    );
}

export default App;

