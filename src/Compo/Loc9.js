import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Yercaud() {
  return (
    <Container className="mt-5" id="yercaud">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>09.Yercaud</h3>
          <img src={require('../assets/Home/Yarcaud.jpeg')} id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2">"The Land of seven forests."</h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu,
              Yercaud is a hill station in the Eastern Ghats steeped in abundant
              greenery. Commonly called 'Ooty of the Poor', this region has a
              history dating back to the time of the British. Located at an
              altitude of 4970 feet, Yercaud is known for its vast expanses of
              coffee plantations and great weather.
            </p>
            <p className="text-indent text-secondary">
              Yercaud lake is the main point of attraction of the region.One of
              the many highlights is the summer festival that takes place in
              May. It is dedicated to Lord Servarayan, the supreme god of the
              ranges and gives visitors a glimpse into the rich heritage of this
              region.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Yercaud</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top"  src={require('../assets/Home/yercaud...(1).jpeg')} />
              <Card.Body>
                <Card.Title>Pagoda Point</Card.Title>
                <Card.Text>
                  Located in the eastern part of the Yercaud Hills, Pagoda point
                  is a beautiful viewpoint where one is treated...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/yercaud1 (2).jpeg')} />
              <Card.Body>
                <Card.Title>Botanical Garden</Card.Title>
                <Card.Text>
                  Any tourist who is interested in gods gift to this planet, the
                  wondrous flora, and in knowing about various...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/yercaud1.(3).jpeg')} />
              <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                  The most alluring aspect of Yercaud is its big yet natural
                  lake very popularly known as the Emerald Lake...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/yercaud1 (4).jpeg')} />
              <Card.Body>
                <Card.Title> Lady's Seat</Card.Title>
                <Card.Text>
                  Lady's Seat is a viewpoint that overlooks the winding ghat
                  road and offers a spectacular view of Mettur Dam...
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

export default Yercaud;