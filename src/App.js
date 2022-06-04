import React, { useState } from "react";
import { Container, Header, Content, Footer } from "rsuite";

import SimpleNavbar from "./components/Header/SimpleHeader";
import SimpleFooter from "./components/Footer/SimpleFooter";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "rsuite/dist/rsuite.min.css";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const updateSideBar = (status) => {
    if (!status) setUser(null);
    setOpen(status);
  };

  const updateUser = (user) => {
    setUser(user);
  };

  window.onmessage = (event) => {
    if (event.origin !== window.location.origin || !event.isTrusted) return;
    console.log("Received", event.data);
    if (event.data?.action) {
      setUser(event.data);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="App show-container">
      <Container className="col-flex space-between">
        <Header>
          <SimpleNavbar />
        </Header>
        <Content className="main row-flex">
          <div className="main-frame">
            <h1>Table</h1>
            <iframe id="users-frame" src="/iframe" title="Users"></iframe>
          </div>
          <SideDrawer user={user} setUser={updateUser} open={open} setOpen={updateSideBar} />
        </Content>
        <Footer>
          <SimpleFooter />
        </Footer>
      </Container>
    </div>
  );
}

export default App;
