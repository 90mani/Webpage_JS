import React, { useState } from 'react';

function App() {
  const [idNumber, setIdNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [profile, setProfile] = useState('');
  const [department, setDepartment] = useState('select');
  const [designation, setDesignation] = useState('select');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      idNumber.trim() === '' ||
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      age.trim() === '' ||
      email.trim() === '' ||
      contact.trim() === '' ||
      profile.trim() === '' ||
      department === 'select' ||
      designation === 'select' ||
      username.trim() === '' ||
      password.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    
    

    
    setIdNumber('');
    setFirstName('');
    setLastName('');
    setAge('');
    setEmail('');
    setContact('');
    setProfile('');
    setDepartment('select');
    setDesignation('select');
    setUsername('');
    setPassword('');

  
    alert('Employee added successfully!');
  };

  return (
    <div className="container">
      <header>ADD EMPLOYEE</header>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>ID NUMBER</label>
          <br />
          <input type="text" placeholder="ID number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
        </div>
        <div className="input-field">
          <label>FIRST NAME</label>
          <br />
          <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-field">
          <label>LAST NAME</label>
          <br />
          <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-field">
          <label>AGE</label>
          <br />
          <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="input-field">
          <label>EMAIL</label>
          <br />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label>CONTACT</label>
          <br />
          <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div className="fileInput">
          <label>PROFILE</label>
          <br />
          <input type="file" name="uploadedFile" accept=".pdf, .doc, .docx" id="profile" />
        </div>
        <div className="input-field">
          <label>DEPARTMENT</label>
          <br />
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="select">--- Select ---</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className="input-field">
          <label>DESIGNATION</label>
          <br />
          <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
            <option value="select">--- Select ---</option>
            <option value="data analyst">DATA ANALYST</option>
            <option value="web developer">WEB DEVELOPER</option>
            <option value="android developer">ANDROID DEVELOPER</option>
            <option value="network engineer">NETWORK ENGINEER</option>
          </select>
        </div>
        <div className="input-field">
          <label>USER NAME</label>
          <br />
          <input type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-field">
          <label>PASSWORD</label>
          <br />
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
