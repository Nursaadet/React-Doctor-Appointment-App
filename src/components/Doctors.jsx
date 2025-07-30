import Container from "react-bootstrap/Container";
import { doctorData } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, name, img, dep }) => (
          <Col xs={6} sm={4} lg={3} key={id}>
            <div className="m-0 p-1">
              <Image
                className="img-thumbnail doctor-img w-100 h-100 m-1"
                src={img}
                alt={name}
                onClick={() => {
                  setShow(true);
                  setDrName(name);
                }}
              />
              <h5>{name} </h5>
              <p>{dep}</p>
            </div>
          </Col>
        ))}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        drName={drName}
      />
    </Container>
  );
};

export default Doctors;
