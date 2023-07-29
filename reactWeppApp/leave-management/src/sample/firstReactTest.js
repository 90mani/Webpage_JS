
// import '../css/App.css';
import '../components/leave_button'
import { useState } from 'react';
import '../css/style.css'


function Car(props) {
    const value = props.permission;
    console.log(value);
    if (value == 'admin') {
        return <Admin></Admin>
    } else {
        return <Employee></Employee>
    }

}
function Admin() {
    return <h1>It's admin page!</h1>;
}

function Employee() {
    return <h1>Employee page</h1>;
}


function App() {
    const [lname, setName] = useState("");
    const [descriptrion, setDesc] = useState("");
    const [noOfDays, setNoOfdays] = useState("");

    return (
        <div class="container">

            <header>Add Leave Type</header>
            <form class="form" id="form" onsubmit="return validate()" method="post">
                <div class="fontuser">
                    <label><b>LEAVE NAME</b></label>
                    <input type="text" placeholder="Leave name" value={lname} onChange={(e) => setName(e.target.value)}></input>
                    <i class="fa fa-user"></i>
                </div>

                <div class="fontuser">
                    <label><b>DESCRIPTION</b></label>
                    <input type="text" placeholder="Description" value={descriptrion} onChange={(e) => setDesc(e.target.value)} />
                    <i class="fa fa-user"></i>
                </div>

                <div class="fontuser">
                    <label><b>NUMBER OF LEAVE DAYS ALLOWED</b></label>
                    <input type="text" placeholder="Number of leave days allowed" value={noOfDays} onChange={(e) => setNoOfdays(e.target.value)} />
                    <i class="fa fa-calendar"></i>
                </div>

                <center>
                    <input type="submit" value="Submit" />
                </center>
                <p>Leave Name: {lname}</p>
                <p>Description: {descriptrion}</p>
                <p>No of days: {noOfDays}</p>
            </form>

        </div >
    );
}

export default App;
