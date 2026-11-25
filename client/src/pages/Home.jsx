import "./Home.css";
function Home({ setPage, setLoggedIn }) {
return (
<div className="dashboard">
 
<h1>EasyMed Dashboard</h1>
 
<div className="tile-container">
 
<div className="tile"
  onClick={() => setPage("calendar")}
>
<h2>Calendar</h2>
<p>Manage appointments</p>
</div>
 
<div className="tile">
<h2>Physicians</h2>
<p>View physician information</p>
</div>
 
<div className="tile">
<h2>Bills</h2>
<p>Manage payments</p>
</div>
 
<div className="tile">
<h2>Profile</h2>
<p>Account Information</p>
</div>
<button onClick={() => setLoggedIn(false)}>
Logout
</button>
</div>
 
</div>
);
}
 
export default Home;