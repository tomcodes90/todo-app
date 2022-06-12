import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";
function App() {
  return (
    <div className="app">
      <div className="todo-dark-mode">
        <Card className="mb-3" style={{ color: "black", width: "18rem" }}>
          <Card.Img src="./images/bg-mobile-dark.jpg" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of React Bootstrap cards</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Button>Test Button</Button>
        <Alert variant="success"> That's a Button</Alert>
      </div>
    </div>
  );
}

export default App;
