import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Ooty() {
  return (
    <Container className="mt-5" id="ooty">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>07.Ooty</h3>
          <img src={require('../assets/Home/Ooty.jpeg')} id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2">"Queen of the Niligris"</h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam,
              is a hill station in Tamil Nadu which serves as a top-rated
              tourist destination. Once regarded as the summer headquarters of
              the East India Company, the Queen of the hills is a picturesque
              getaway.
            </p>
            <p className="text-indent text-secondary">
              The Nilgiri mountain railway is the steepest track in all of Asia.
              Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and
              Malaika Arora matching steps on top of a train? Remember the
              breathtaking locales as the train chugged its way across lush
              greenery? Yes, that was the Nilgiri Mountain Railways, and the
              Nilgiri Mountains all along Dotted with tea gardens, serene
              waterfalls, winding country lanes, and charming colonial
              architecture, Ooty is the perfect respite everyone
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Ooty</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/ooty1 (1).jpeg')} />
              <Card.Body>
                <Card.Title>Nilgiri Mountain Railway</Card.Title>
                <Card.Text>
                  Nilgiri Mountain Railway, also known as Toy Train in Ooty, is
                  one of the key attractions of the popular hill...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/ooty1 (2).jpeg')} />
              <Card.Body>
                <Card.Title>Ooty Botanical Garden</Card.Title>
                <Card.Text>
                  Ooty Botanical Gardens lie on the lower slopes of the
                  Doddabetta peak, the Government Botanical..
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/ooty1.(3).jpeg')} />
              <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                  Emerald Lake is situated in Emerald Village, around 20-22
                  kilometres from the main city of Ooty and...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/ooty1.(4).jpeg')} />
              <Card.Body>
                <Card.Title>Dolphin's Nose</Card.Title>
                <Card.Text>
                  Located about 12 km away from Coonoor is the Dolphin's Nose
                  about 1,500 meters above sea level. The tip...
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

export default Ooty;