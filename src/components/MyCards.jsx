import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

function BasicExample(props) {
  return (
    <Col xs="3">
      <Card>
        <Image fluid variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <h5>
            <Badge bg="secondary">{props.category}</Badge>
          </h5>
          <Button variant="primary">Scopri di più...</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BasicExample;
