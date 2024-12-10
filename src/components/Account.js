import React from "react";
import { Col, Container, Row } from "reactstrap";
import User from "./utils/user";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Admin from "./utils/admin";

const Account = () => {
  let { role } = useSelector((state) => state.usersInfo.user);

  return (
    <Container fluid className="Account-page">
      <Row>
        <Navbar />
      </Row>
      <Col
        className="Account-col  d-flex flex-column align-items-center justify-content-center"
        style={{ marginTop: "200px" }}
      >
        {role === "admin" ? <Admin /> : <User />}
      </Col>
    </Container>
  );
};

export default Account;
