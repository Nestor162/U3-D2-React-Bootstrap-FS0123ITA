import Nav from "react-bootstrap/Nav";

function MyPills() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="m-3">
      <Nav.Item>
        <Nav.Link href="#Fantasy">Fantasy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#History">History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Horror">Horror</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Sci-Fi">Sci-Fi</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Romance">Romance</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyPills;
