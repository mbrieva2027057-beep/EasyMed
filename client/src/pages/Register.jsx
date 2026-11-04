import { useState } from "react";


function Register({}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        const userData = {
            firstName,
            lastName,
            email,
            password
    };

    const response = await fetch(
        "http://localhost:5000/register",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
        }
    );

    console.log("Sent");    
    }
    return (
        <div>
        <h1>Welcome</h1>

        <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />

        <br />
        <br />

        <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />

        <br />
        <br />


        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleRegister}>
            Register
        </button>
        </div>
    );
}

export default Register;
