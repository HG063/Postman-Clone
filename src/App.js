import { Form, Col, Button, Nav, Stack } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Form className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* <Stack direction="vertical" gap={4}> */}
        <Stack direction="horizontal" className="mt-3 mb-4">
          <Form.Group controlId="formGridEmail">
            <Form.Select defaultValue="GET">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} xs={6} controlId="formGridEmail">
            <Form.Control
              required
              type="url"
              placeholder="https://example.com"
            />
          </Form.Group>
          <Button>Send</Button>
        </Stack>
        <Stack>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Stack>
      </div>
      {/* </Stack> */}
    </Form>
  );
}

export default App;
