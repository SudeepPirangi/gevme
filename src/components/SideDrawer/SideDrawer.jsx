import React from "react";
import { Drawer, List } from "rsuite";

import Profile from "./Profile";
import Posts from "./Posts";
import { PROFILE, POSTS } from "../CommonUI/Constants";

const SideDrawer = ({ user, setUser, open, setOpen }) => {
  return (
    <Drawer size={"xs"} backdrop={"static"} open={open} onClose={() => setOpen(false)}>
      <Drawer.Body>
        <div className="row-flex" style={{ height: "100%" }}>
          <div className="user-info">
            {user && user.action === PROFILE && <Profile user={user} />}
            {user && user.action === POSTS && <Posts user={user} />}
          </div>
          <div className="side-draw">
            <List bordered hover>
              <List.Item className={user && user.action === PROFILE ? "active" : ""} onClick={() => setUser({ ...user, action: PROFILE })}>
                Profile
              </List.Item>
              <List.Item className={user && user.action === POSTS ? "active" : ""} onClick={() => setUser({ ...user, action: POSTS })}>
                Posts
              </List.Item>
            </List>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default SideDrawer;
