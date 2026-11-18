import { useState } from "react";
 
function Login() {
 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 
        const handleLogin = async () => {
         
            const loginData = {
            email,
            password
        };
         
        const response = await fetch(
        "http://localhost:5000/login",
            {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        }
        );
         
        const result = await response.text();
         
        console.log(result);
};
 
return (
<div>
<h1>Welcome Back</h1>
 
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
 
<button onClick={handleLogin}>
Login
</button>
</div>
);
}
 
export default Login;