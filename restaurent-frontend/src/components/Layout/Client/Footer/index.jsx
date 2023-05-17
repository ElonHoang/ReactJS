import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

ClientFooter.propTypes = {};

function ClientFooter(props) {
  return (
    <div>
      {/* Contact */}
      <div id="fh5co-contact" data-section="reservation">
        <Container>
          <Row className="text-center fh5co-heading row-padded">
            <Col md={{ span: 8, offset: 2 }}>
              <h2 className="heading to-animate">Reserve a Table</h2>
              <p className="sub-heading to-animate">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="to-animate-2">
              <h3>Contact Info</h3>
              <ul className="fh5co-contact-info">
                <li className="fh5co-contact-address">
                  <FontAwesomeIcon icon={faHome} /> 5555 Love Paradise 56 New Clity 5655, <br /> Excel Tower United
                  Kingdom
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} /> (123) 465-6789
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> info@freehtml5.co
                </li>
              </ul>
            </Col>
            <Col md={6} className="to-animate-2">
              <h3>Reservation Form</h3>
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="name" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control id="name" placeholder="Name" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email" srOnly>
                    Email
                  </Form.Label>
                  <Form.Control id="email" placeholder="Email" type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="occation" srOnly>
                    Occation
                  </Form.Label>
                  <Form.Control as="select" id="occation">
                    <option>Select an Occation</option>
                    <option>Wedding Ceremony</option>
                    <option>Birthday</option>
                    <option>Others</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="date" srOnly>
                    Date
                  </Form.Label>
                  <Form.Control id="date" placeholder="Date & Time" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="message" srOnly>
                    Message
                  </Form.Label>
                  <Form.Control as="textarea" id="message" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}

      <div id="fh5co-footer">
        <Container>
          <Row className="row-padded">
            <Col md={12} className="text-center">
              <p className="to-animate">
                &copy; 2016 Foodee Free HTML5 Template. <br /> Designed by{' '}
                <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">
                  FREEHTML5.co
                </a>{' '}
                Demo Images:{' '}
                <a href="http://pexels.com/" target="_blank" rel="noopener noreferrer">
                  Pexels
                </a>{' '}
                <br /> Tasty Icons Free{' '}
                <a
                  href="http://handdrawngoods.com/store/tasty-icons-free-food-icons/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  handdrawngoods
                </a>
              </p>
              <p className="text-center to-animate">
                <a href="#" className="js-gotop">
                  Go To Top
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <ul className="fh5co-social">
                <li className="to-animate-2">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="to-animate-2">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="to-animate-2">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClientFooter;
