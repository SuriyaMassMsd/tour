import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Hogenakkal() {
  return (
    <Container className="" id="hogenakkal">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>10.Hogenakkal</h3>
          <img src={require('../assets/Home/Hogenakkal.jpeg')} id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2">
            "The one that will take your breath away"
          </h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri
              district of Tamil Nadu where the Kaveri river splits into multiple
              streams of waterfalls. Located at a distance of 180 km from
              Bangalore, Hogenakkal has water throughout the year. The carbonite
              rocks, the coracle (basket boat) rides, freshwater fish, oil
              massages by locals make it a perfect one day trip or a weekend
              getaway from Bangalore.
            </p>
            <p className="text-indent text-secondary">
              Sometimes referred to as the "Niagara Falls of India," it is also
              known for the medicinal baths. Also known at Marikottayam, Hoge
              actually means smoke and Kal means rock. Recently, the place has
              been found to be littered with plastic bags and garbage and the
              fish market outside the waterfall might stink. Weekends can be
              crowded. Keep all these points in mind before visiting.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Hogenakkal</h3>

        <Row className="row-cols-1 row-cols-md-4 ">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/hogenakkal1.jpeg')} />
              <Card.Body>
                <Card.Title>Theerthamalai Temple</Card.Title>
                <Card.Text>
                  Theerthamalai is a popular pilgrim centre close to Hogenakkal.
                  One of its most popular destinations is the...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/hogenakkal2..jpeg')} />
              <Card.Body>
                <Card.Title>Hogenakkal Falls</Card.Title>
                <Card.Text>
                  Hogenakkal Falls is a scintillating waterfall that is located
                  on river Kaveri in the Dharmapuri district of...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/hogenakkal3.jpeg')} />
              <Card.Body>
                <Card.Title>Pennagram Village</Card.Title>
                <Card.Text>
                  The village is located about 20 km away from Hogenakkal and is
                  famous for its weekly fair that it holds every...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/hokenakkal4..jpeg')} />
              <Card.Body>
                <Card.Title> Mettur Dam</Card.Title>
                <Card.Text>
                  Mettur Dam, situated 30 miles from Salem in a small Mettur
                  Village, is one of the largest dams in India. Built...
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

export default Hogenakkal;