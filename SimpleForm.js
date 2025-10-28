import React, { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }

    // username
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    // password
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    // email
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(`${name},\n${password},\n${email},\nForm submitted`);
    }
    return(<form onSubmit={onSubmitForm}>
        {/* <label>Name :
            <input type="text"
                    value={name}
                    onChange={handleChange} />
        </label> */}
        <div className="container">
        <label>Username:
            <input type="text"
                    value={name}
                    onChange={handleChangeName} />
        </label><br />
        <label>Password:
            <input type="password"
                    value={password}
                    onChange={handleChangePassword} />
        </label><br />
        <label>email:
            <input type="email"
                    value={email}
                    onChange={handleChangeEmail} />
        </label><br /></div>
        <button type="submit">Submit</button>
        
    </form>)
}
export default SimpleForm;