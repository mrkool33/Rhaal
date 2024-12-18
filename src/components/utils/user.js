import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Nav,
  Modal,
} from "react-bootstrap";
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
  const [editField, setEditField] = useState(null); // Field to edit
  const [showEditModal, setShowEditModal] = useState(false); // Modal visibility
  const [newValue, setNewValue] = useState(""); // New value for the field
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //validations
  const validateInput = (field, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${field} cannot be empty`;
    } else if (field === "firstName" || field === "lastName") {
      if (value.length > 15) {
        error = "Maximum 15 characters allowed";
      }
    } else if (field === "phoneNumber") {
      if (!/^(9|7)\d*$/.test(value)) {
        error = "Phone number must start with 9 or 7";
      } else if (value.length < 8) {
        error = "Phone number must be at least 8 digits";
      }
    }
    return error;
  };
  // Handle account data change
  const handleModalSave = () => {
    const error = validateInput(editField, newValue);
    if (error) {
      setErrors({ [editField]: error }); // Set errors dynamically
    } else {
      setErrors({});
      setAccountData({ ...accountData, [editField]: newValue });
      setShowEditModal(false);
    }
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
  const [bookingItems] = useState([
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
            <Nav.Link eventKey="bookingItems">booking </Nav.Link>
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
                  onClick={() => {
                    setEditField("firstName");
                    setNewValue(accountData.firstName);
                    setShowEditModal(true);
                  }}
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
                  onClick={() => {
                    setEditField("lastName");
                    setNewValue(accountData.lastName);
                    setShowEditModal(true);
                  }}
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
                  onClick={() => {
                    setEditField("email");
                    setNewValue(accountData.email);
                    setShowEditModal(true);
                  }}
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
                  onClick={() => {
                    setEditField("phoneNumber");
                    setNewValue(accountData.phoneNumber);
                    setShowEditModal(true);
                  }}
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

          {/* Booking */}
          <Tab.Pane eventKey="bookingItems">
            <Row>
              {bookingItems.map((item) => (
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

      {/* Edit Modal */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit {editField}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>New Value</Form.Label>
              <Form.Control
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                isInvalid={!!errors[editField]} // Dynamically show validation errors
              />
              <Form.Control.Feedback type="invalid">
                {errors[editField]}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default User;
