import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../Faetures/UserSlicer";
import profile from "../../assets/profile.jpg";
import { addLocation } from "../../Faetures/locationSlicer";
import { addItems } from "../../Faetures/itemsSlicer";
const Admin = () => {
  let { profileImg, role, ufname, ulname, email, phone, _id } = useSelector(
    (state) => state.usersInfo.user
  );
  const msg = useSelector((state) => state.usersInfo.message);
  const dispatch = useDispatch();

  // Account data
  const [accountData, setAccountData] = useState({
    userID: _id,
    firstName: ufname,
    lastName: ulname,
    email: email,
    phoneNumber: phone,
  });

  // Add Site form data
  const [formData, setFormData] = useState({
    siteName: "",
    rating: 0,
    city: "",
    image: "",
    description: "",
    category: "",
    lat: 0,
    lng: 0,
  });

  // Add Rent Item form data
  const [rentItemData, setRentItemData] = useState({
    itemName: "",
    price: "",
    image: "",
    description: "",
  });

  // Handle account data change
  const handleAccountChange = (field, value) => {
    setAccountData({ ...accountData, [field]: value });
  };

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRentItemChange = (e) => {
    setRentItemData({ ...rentItemData, [e.target.name]: e.target.value });
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
  const handleSiteSubmit = (e) => {
    e.preventDefault();
    const locationData = {
      url: formData.image,
      discrypter: formData.description,
      lat: formData.lat,
      lng: formData.lng,
      city: formData.city,
      state: formData.siteName,
      category: formData.category,
      rating: formData.rating,
    };
    dispatch(addLocation(locationData));
    console.log(formData);
  };

  const handleRentItemSubmit = (e) => {
    e.preventDefault();
    console.log(rentItemData);
    const item = {
      url: rentItemData.image,
      Iname: rentItemData.itemName,
      price: rentItemData.price,
      description: rentItemData.description,
    };
    dispatch(addItems(item));
    alert("Rent item added successfully!");
  };

  return (
    <Container className="my-4">
      {/* Profile Section */}
      <div className="text-center mb-4">
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
              overflow: "hidden",
            }}
          >
            {/* Profile Image */}
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
          {/* Edit Icon */}
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
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="account">Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="addItems">Add Items</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="addRentItems">Add Rent Items</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* Account Tab */}
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
            </Row>
          </Tab.Pane>

          {/* Add Items Tab */}
          <Tab.Pane eventKey="addItems">
            <h4 className="text-center mb-4">Add a New Site</h4>
            <Form onSubmit={handleSiteSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Site Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Site name"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="4.5"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="muscat"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>lat</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="lat"
                      name="lat"
                      value={formData.lat}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Lng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="lng"
                      name="lng"
                      value={formData.lng}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL Image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Caves">Caves</option>
                  <option value="Beaches">Beaches</option>
                  <option value="Mountains">Mountains</option>
                  <option value="Historical Sites">Historical Sites</option>
                </Form.Control>
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#FFAA00",
                  border: "none",
                  width: "100%",
                }}
              >
                Add Site
              </Button>
            </Form>
          </Tab.Pane>

          {/* Add Rent Items Tab */}
          <Tab.Pane eventKey="addRentItems">
            <h4 className="text-center mb-4">Add a New Rent Item</h4>
            <Form onSubmit={handleRentItemSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  name="itemName"
                  value={rentItemData.itemName}
                  onChange={handleRentItemChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="4 Riyal"
                  name="price"
                  value={rentItemData.price}
                  onChange={handleRentItemChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL Image"
                  name="image"
                  value={rentItemData.image}
                  onChange={handleRentItemChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  name="description"
                  value={rentItemData.description}
                  onChange={handleRentItemChange}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#FFAA00",
                  border: "none",
                  width: "100%",
                }}
              >
                Add Item
              </Button>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Admin;
