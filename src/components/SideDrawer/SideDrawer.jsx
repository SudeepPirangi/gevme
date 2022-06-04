import React, { useState } from "react";
import { Drawer, List } from "rsuite";
import Placeholder from "rsuite/Placeholder";

import Profile from "./Profile";
import Posts from "./Posts";

const SideDrawer = ({ user, setUser, open, setOpen }) => {
  return (
    <Drawer size={'xs'} backdrop={"static"} open={true} onClose={() => setOpen(false)}>
      <Drawer.Body>
        {/* <Placeholder.Paragraph /> */}
        <div className="row-flex">
          <div className="user-info">
            {user && user.action === "PROFILE" && <Profile />}
            {user && user.action === "POSTS" && <Posts />}
          </div>
          <div className="side-draw">
            <List bordered hover>
              <List.Item onClick={() => setUser({ ...user, action: "PROFILE" })}>Profile</List.Item>
              <List.Item onClick={() => setUser({ ...user, action: "POSTS" })}>Posts</List.Item>
            </List>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default SideDrawer;
