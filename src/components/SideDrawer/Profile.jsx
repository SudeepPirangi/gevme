import React from "react";
import { Form, Divider } from "rsuite";

const { Group, ControlLabel, Control } = Form;

const Profile = ({ user }) => {
  return (
    <div className="profile-section">
      <h2>Profile</h2>
      <div className="profile-body">
        <div className="col-flex" style={{ justifyContent: "center", alignItems: "center" }}>
          <div className="dummy-dp">{user && user.name.split(" ").map((name) => name.charAt(0).toUpperCase())}</div>
          <div className="name">{user.name}</div>
          <div className="username">{user.username}</div>
        </div>
        <Divider style={{ margin: "2em 0" }} />
        <div className="col-flex">
          <Form>
            <Group controlId="email">
              <ControlLabel>Email</ControlLabel>
              <Control name="email" value={user.email} />
            </Group>
            <Group controlId="textarea">
              <ControlLabel>Address</ControlLabel>
              <Control name="address" value={user.address.street} />
            </Group>
            <Group controlId="phone">
              <ControlLabel>Phone</ControlLabel>
              <Control name="phone" value={user.phone} />
            </Group>
            <Group controlId="website">
              <ControlLabel>Website</ControlLabel>
              <Control name="website" value={user.website} />
            </Group>
            <Group controlId="companyName">
              <ControlLabel>Company Name</ControlLabel>
              <Control name="companyName" value={user.company.name} />
            </Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
