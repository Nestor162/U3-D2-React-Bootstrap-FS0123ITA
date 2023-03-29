import { Container, Row, Col } from "react-bootstrap";
const MyFooter = () => (
  <Container fluid className="MyFooter">
    <Row pt={3}>
      <Col>Servizio clienti</Col>
      <Col>Aiuto e FAQ</Col>
      <Col>Spedizioni</Col>
    </Row>
  </Container>
);
export default MyFooter;
