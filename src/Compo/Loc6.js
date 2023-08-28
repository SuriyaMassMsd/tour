import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Rameshwaram() {
  return (
    <Container className="mt-5" id="rameshwaram">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>06.Rameshwaram</h3>
          <img src={require('../assets/Home/Rameshwaran.jpeg')} id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2" >"The Bridge on the Indian Ocean"</h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Rameshwaram is located on a beautiful island in the South Indian
              state of Tamil Nadu. It is separated by a small Pamban channel
              from Sri Lanka. According to Hindu mythology, this is the place
              where Lord Rama created a bridge across the sea to Sri Lanka.
            </p>
            <p className="text-indent text-secondary">
              Renowned for its magnificent prakaras with massive sculptured
              pillars on either side, The Ramanathaswamy Temple houses the
              longest corridor in the world. Agniteertham is famous for its
              sacred waters and Pilgrims perform poojas in honour of their
              ancestors at this seashore. The five-faced Hanuman Temple holds
              the floating stone which was used to build the bridge between
              India and Sri Lanka. Rameshwaram has the first sea bridge
              connecting the town of Mandapam with Pamban Island, and
              Rameswaram.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Rameshwaram</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/rameshwarem1.jpeg')} />
              <Card.Body>
                <Card.Title>Dhanushkodi Temple</Card.Title>
                <Card.Text>
                Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/rameshwarem2.jpeg')} />
              <Card.Body>
                <Card.Title>Lakshmana Temple</Card.Title>
                <Card.Text>
                Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/Rameshwaram3..jpeg')} />
              <Card.Body>
                <Card.Title>Rameswaram Temple</Card.Title>
                <Card.Text>
                A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/rameshwarem1 (6).jpeg')} />
              <Card.Body>
                <Card.Title> Villoondi Tirtham</Card.Title>
                <Card.Text>
                Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Rameshwaram;