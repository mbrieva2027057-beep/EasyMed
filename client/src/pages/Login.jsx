import { useState } from "react";


function Login() {

    return (
        <div>
        <h1>Welcome back</h1>

        <input
            type="email"
            placeholder="email"
        />

        <br />
        <br />

        <input
            type="password"
            placeholder="password"
        />

        <br />
        <br />

        <button onClick={handleLogin}>
            Login
        </button>
        </div>
    );
}


export default Login;