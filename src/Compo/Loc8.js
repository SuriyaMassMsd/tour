import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Kaniyakumari() {
  return (
    <Container className="mt-5" id="kaniyakumari">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>08.Kanyakumari</h3>
          <img src={require('../assets/Home/Kanyakumari.jpeg')} id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2">"Cape Comorin or The Land's End"</h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Kanyakumari Tourism Bordered by the three seas - Arabian, Indian
              and the Bay of Bengal, Kanyakumari is the southernmost tip of the
              Indian Peninsula. A small coastal town in the state of Tamil Nadu,
              Kanyakumari was earlier known as Cape Comorin.
            </p>
            <p className="text-indent text-secondary">
              Kanyakumari offers the marvellous confluence of the Bay of Bengal,
              the Arabian Sea and the Indian ocean meeting together at a point.
              But, this is not a miracle, the miracle lies in the beauty that
              the water of three seas does not mix, you can clearly distinguish
              between the turquoise blue, deep blue and sea green waters of the
              three seas. To enjoy the best view of sunset and sunrise, you can
              visit the Triveni Sangam point and the famous View tower. The town
              has a mountainous terrain with elevated patches of hills. coconut
              trees and lined with paddy fields.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Kanyakumari</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/kanyakumari1 (1).jpeg')} />
              <Card.Body>
                <Card.Title>Kanyakumari Beach</Card.Title>
                <Card.Text>
                  Located in the southernmost part of India, Kanyakumari beach
                  with its beautiful hue- changing beaches...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/kanyakumari1.(2).jpeg')} />
              <Card.Body>
                <Card.Title>Vivekananda Memorial</Card.Title>
                <Card.Text>
                  The magnificent Vivekananda Rock Memorial is located on a
                  small island off Kanyakumari. It has the picturesque...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/kanyakumari1.(3).jpeg')} />
              <Card.Body>
                <Card.Title>Thiruvalluvar Status</Card.Title>
                <Card.Text>
                  Dedicated to the accomplished philosopher and poet
                  Thiruvalluvar, this beautiful statue finds itself...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/kanyakumari1 (4).jpeg')} />
              <Card.Body>
                <Card.Title> Thirparappu Falls</Card.Title>
                <Card.Text>
                  Located at a distance of about 55 kilometers from waters of
                  the Thirparappu... Kanyakumari, the cascading
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

export default Kaniyakumari;