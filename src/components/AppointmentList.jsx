import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TiTickOutline, TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps, setApps }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps?.length ? (
        apps.map(({ id, patient, day, consulted, doctor }) => (
          <Row
            key={id}
            className={
              "appointments justify-content-between align-item-center mx-auto" +
              (consulted ? " consulted" : "")
            }
          >
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString()}</h5>
              <h5>Time: {new Date(day).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTickOutline type="button" className="text-success display-2" />
              <TiDelete type="button" className="text-danger display-2" />
            </Col>
          </Row>
        ))
      ) : (
        <img src="./img/appointment.jpg" alt="No Appointments" />
      )}
    </Container>
  );
};

export default AppointmentList;
