import React, { useState } from 'react';
import './leave.css';

const App = () => {
  const [formData, setFormData] = useState(
    {
    leave_name: '',
    input_description: '',
    input_allowed_days: '',
  }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    validate(); 
  };

  const validate = () => {
    if (formData.leave_name === '') {
      alert('Please enter leave name');
      return false;
    }
    if (formData.input_description === '') {
      alert('Please enter description of leave');
      return false;
    }
    if (formData.input_allowed_days === '') {
      alert('Please enter number of leave days allowed');
      return false;
    }
    return true;
  };

  return (
    <div className="container">
      <header>Add Leave Type</header>
      <form onSubmit={handleSubmit}>
        <div className="fontuser">
          <div className="input-field">
            <label>LEAVE NAME</label><br></br>
            <input type="text"placeholder="Leave name"name="leave_name"
            id="leave_name"
              value={formData.leave_name}
              onChange={handleInputChange}
            />
          </div>
        </div><br></br>

        <div className="fontuser">
          <div className="input-field">
            <label>DESCRIPTION</label><br></br>
            <input
              type="text"
              placeholder="Description"
              name="input_description"
              id="input_description"
              value={formData.input_description}
              onChange={handleInputChange}
            />
          </div>
        </div><br></br>

        <div className="fontuser">
          <div className="input-field">
            <label>NUMBER OF LEAVE DAYS ALLOWED</label><br />
            <input
              type="text"
              placeholder="Number of leave days allowed"
              name="input_allowed_days"
              id="input_allowed_days"
              value={formData.input_allowed_days}
              onChange={handleInputChange}
            />
            <i className="fa fa-calendar"></i>
          </div>
        </div><br/>

       <center> <input type="submit" value="Submit" /></center>
      </form>
    </div>
  );
};

export default App;