import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { Container, Header, Content, Footer } from "rsuite";

import SimpleNavbar from "./components/Header/SimpleHeader";
import SimpleFooter from "./components/Footer/SimpleFooter";

function App() {
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
          <div className="side-draw">
            <ul>
              <li>Profile</li>
              <li>Post</li>
            </ul>
          </div>
        </Content>
        <Footer>
          <SimpleFooter />
        </Footer>
      </Container>
    </div>
  );
}

export default App;
