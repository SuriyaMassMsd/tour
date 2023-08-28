import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Theni() {
  return (
    <Container className="mt-5 " id="theni">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>05.Theni</h3>
          <img src={require('../assets/Home/Theni.jpeg')}  id="lk-img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder ms-5" id="lk-c2">"A little hamlet in Tamil Nadu"</h6>
          <div className="text-container text-container1 ms-5" id="lk-c2">
            <p className="text-indent text-secondary">
              Theni Tourism Dotted by luscious patches of greenery and beautiful
              waterfalls, Theni is a little hamlet on the Western Ghats. The
              topography of Theni mainly consists of hills and ranges. It has
              plenty of rivers and dams and is an abode to 27 forests hence
              filled with unparalleled greenery.
            </p>
            <p className="text-indent text-secondary">
              There temples like Kamatchi Amman Temple, Vellappar Temple, and
              Balasubramanya Temple which are brimming with devotees from all
              around the country throughout the year. The vibrant local markets
              of Theni are shoppers' paradise. The local handloom products and
              agricultural products are the best buys at these markets. The
              aroma filled tea estates in Theni are a paradise. The Kolukkamalai
              Tea estate is often deemed to be the world's highest organic tea
              estate. The Suruli Falls and the Kumbakarai Falls are the crown
              jewels of Theni.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Theni</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/theni1.jpeg')} />
              <Card.Body>
                <Card.Title>Chinna Suruli Falls</Card.Title>
                <Card.Text>
                Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/theni2.jpeg')} />
              <Card.Body>
                <Card.Title>Kumbakkarai Falls</Card.Title>
                <Card.Text>
                Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/theni3.jpeg')} />
              <Card.Body>
                <Card.Title>Meghamalai</Card.Title>
                <Card.Text>
                Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={require('../assets/Home/theni4.jpeg')} />
              <Card.Body>
                <Card.Title> Suruli Falls</Card.Title>
                <Card.Text>
                Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...
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

export default Theni;