import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Chennai() {
  return (
    <Container className="mt-5" id="chennai">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>01. Chennai</h3>
          <img  id="lk-img" alt=""  src={require('../assets/Home/Chennai.jpeg')} />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder  ms-5">"The Detroit Of India"</h6>
          <div className="text-container text-container1  ms-5">
            <p className="text-indent text-secondary">
              Formerly known as Madras, Chennai is the capital city of the state
              of Tamil Nadu, in the southern part of India. Located on the
              Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is
              immersed in tradition. This 'capital of the south', is one among
              the four metropolitan siblings of India, having a rich cultural
              history which it perfectly balances with its metropolis lifestyle.
            </p>
            <p className="text-indent text-secondary">
              Amid its chaos of traffic and sweltering humid climate, Chennai is
              worth visiting for its temples steeped in south-Indian culture,
              British-era museums and monuments, culinary delights and Marina
              Beach (Second largest urban beach in the world). Chennai's skyline
              is famous for its towering skyscrapers, but the heart of Chennai
              has an old-world charm to it that refuses to be overshadowed.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Chennai</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/chennai1.jpeg')} />
              <Card.Body>
                <Card.Title>Marina Beach</Card.Title>
                <Card.Text>
                  Situated in the city of Chennai in Tamil Nadu, Marina beach is
                  a natural urban beach along the Bay of Bengal.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/chennai2.jpeg')} />
              <Card.Body>
                <Card.Title>MGR Flim City</Card.Title>
                <Card.Text>
                  Having been established in the year 1994, a considerably new
                  structure,the MGR Film City is managed...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" height={"165px"} src={require('../assets/Home/chennai3.jpeg')} />
              <Card.Body>
                <Card.Title> Marundeeswarar Temple</Card.Title>
                <Card.Text>
                  The Magnificent Marundeeswarar Temple, in Tiruvanmiyur, near
                  chennai has the temple deity Shiva..
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" height={"165px"} src={require('../assets/Home/chennai4.jpeg')} />
              <Card.Body>
                <Card.Title> Breezy Beach</Card.Title>
                <Card.Text>
                  Breezy Beach lays in the remote and serene neighbourhood of
                  Valmiki Nagar in Chennai. Being smaller and less polluted...
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

export default Chennai;