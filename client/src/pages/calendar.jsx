import { useState } from "react";
 
    function Calendar({ setPage }) {
     
    const [appointmentDate, setAppointmentDate] = useState("");
    const [notes, setNotes] = useState("");
     
        const handleAppointment = async() => {
        const appointmentData = {appointmentDate,notes};    
        const response = await fetch(
        "http://localhost:5000/appointments",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
        });

    };
     
        return (
        <div>
        <h1>Appointments</h1>
         
        <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        />
         
        <br />
        <br />
         
        <input
        type="text"
        placeholder="Appointment Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
         
        <br />
        <br />
         
        <button onClick={handleAppointment}>
        Add Appointment
        </button>
        <button onClick={() => setPage("home")}>
        Back
        </button>
        </div>
    );
}
 
export default Calendar;