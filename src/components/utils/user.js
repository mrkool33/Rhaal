import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";
import profile from "../../assets/profile.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileValidations } from "../../Validations/profileValidations";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../../Faetures/UserSlicer";

const User = () => {
  let { profileImg, role, ufname, ulname, email, phone, _id } = useSelector(
    (state) => state.usersInfo.user
  );

  const [accountData, setAccountData] = useState({
    userID: _id,
    firstName: ufname,
    lastName: ulname,
    email: email,
    phoneNumber: phone,
  });
  let [userID, setId] = useState(_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //validations
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ProfileValidations) });
  // Handle account data change
  const handleAccountChange = (field, value) => {
    setAccountData({ ...accountData, [field]: value });
  };

  // Handle form submissions
  const handleSubmitChanges = (e) => {
    e.preventDefault();
    const user = {
      userID: accountData.userID,
      ufname: accountData.firstName,
      ulname: accountData.lastName,
    };

    dispatch(updateUser(user));
    alert("updated");
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "are serten want to delet the account all you informations well be deleted?"
      ) == true
    ) {
      if (window.confirm("are you realy want to delete you account?") == true) {
        if (
          window.confirm("this is the last warning  to delete account") == true
        ) {
          dispatch(deleteUser(userID));
          navigate("/login");
        }
      }
    }
  };
  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);
  const [rentedItems] = useState([
    {
      id: 1,
      name: "Life Jacket",
      image: "https://via.placeholder.com/150?text=Life+Jacket", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Tent",
      image: "https://via.placeholder.com/150?text=Tent", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Waterproof Bag",
      image: "https://via.placeholder.com/150?text=Waterproof+Bag", // Replace with actual image URL
    },
  ]);
  return (
    <Container className="my-4">
      {/* Profile Section */}
      <div className="text-center">
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#f2f2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              margin: "0 auto",
            }}
          >
            {profileImg ? (
              <img
                src={profileImg}
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            ) : (
              <img
                src={profile}
                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              />
            )}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              right: "-10px",
              background: "#FFAA00",
              borderRadius: "50%",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            ✏️
          </div>
        </div>
        <h3>{ufname + " " + ulname}</h3>
        <p>{email}</p>
      </div>

      {/* Tabs */}
      <Tab.Container defaultActiveKey="account">
        <Nav variant="tabs" className="mt-4">
          <Nav.Item>
            <Nav.Link eventKey="account">Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="rentedItems">Rented Items</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-4">
          {/* Account Details */}
          <Tab.Pane eventKey="account">
            <h4 className="mb-4">Account</h4>
            <Row className="align-items-center mb-3">
              <Col md={8}>
                <strong>First Name</strong>
                <p>{accountData.firstName}</p>
              </Col>
              <Col md={4} className="text-end">
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    handleAccountChange(
                      "firstName",
                      prompt("Enter new First Name", accountData.firstName)
                    )
                  }
                >
                  ✏ Change
                </Button>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col md={8}>
                <strong>Last Name</strong>
                <p>{accountData.lastName}</p>
              </Col>
              <Col md={4} className="text-end">
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    handleAccountChange(
                      "lastName",
                      prompt("Enter new Last Name", accountData.lastName)
                    )
                  }
                >
                  ✏ Change
                </Button>
              </Col>
            </Row>
            <Row className="align-items-center mb-3">
              <Col md={8}>
                <strong>Email</strong>
                <p>{accountData.email}</p>
              </Col>
              <Col md={4} className="text-end">
                <Button
                  disabled
                  variant="outline-primary"
                  onClick={() =>
                    handleAccountChange(
                      "email",
                      prompt("Enter new Email", accountData.email)
                    )
                  }
                >
                  ✏ Change
                </Button>
              </Col>
            </Row>

            <Row className="align-items-center mb-3">
              <Col md={8}>
                <strong>Phone Number</strong>
                <p>{accountData.phoneNumber}</p>
              </Col>
              <Col md={4} className="text-end">
                <Button
                  disabled
                  variant="outline-primary"
                  onClick={() =>
                    handleAccountChange(
                      "phoneNumber",
                      prompt("Enter new Phone Number", accountData.phoneNumber)
                    )
                  }
                >
                  ✏ Change
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="text-end">
                <Button variant="outline-primary" onClick={handleSubmitChanges}>
                  ✏ Save changes
                </Button>
                <p></p>
              </Col>
              <Col className="mb-3">
                <div className="d-flex justify-content-end w-100">
                  <Button className="btn-danger" onClick={handleDelete}>
                    Delete Account
                  </Button>
                </div>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Rented Items */}
          <Tab.Pane eventKey="rentedItems">
            <Row>
              {rentedItems.map((item) => (
                <Col key={item.id} sm={12} md={4} className="text-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <p className="mt-2">{item.name}</p>
                </Col>
              ))}
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default User;
