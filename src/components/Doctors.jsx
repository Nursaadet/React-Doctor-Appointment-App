import Container from "react-bootstrap/Container";
import { doctorData } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Doctors = () => {
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((doctor) => {
          const { id, name, img, dep } = doctor;
          return (
            <Col xs={6} sm={4} lg={3}  key={id}>
              <Image className="img-thumbnail doctor-img w-100" src={img} alt={name} />
              <h5>{name} </h5>
              <p>{dep}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Doctors;
