import { Component } from "react";
import MyCards from "./MyCards.jsx";
import MyPills from "./MyPills";
import fantasy from "../data/fantasy.json";
import { Row, Container } from "react-bootstrap";
/* import history from "../data/fantasy.json";
import horror from "../data/fantasy.json";
import romance from "../data/fantasy.json";
import scifi from "../data/scifi.json"; */

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <h3>Seleziona Categoria:</h3>
          <MyPills />
          <Row>
            {fantasy.map((book, index) => (
              <MyCards key={`book-${index}`} title={book.title} src={book.img} price={book.price} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
