import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";


const Home = () => {
  const [Appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments"))
  );
  console.log(Appointments);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">SAADET HOSPITAL</h1>
      <Doctors setApps={setAppointments} apps={Appointments} />
      <AppointmentList apps={Appointments} setApps={setAppointments} />
    </main>
  );
};

export default Home;
