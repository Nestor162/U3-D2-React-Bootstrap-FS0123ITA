import Nav from "react-bootstrap/Nav";

function MyPills() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="m-3">
      <Nav.Item>
        <Nav.Link href="#">Fantasy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="History">History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Horror">Horror</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Sci-Fi">Sci-Fi</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyPills;
