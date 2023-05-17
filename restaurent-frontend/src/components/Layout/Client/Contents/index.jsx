import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, Carousel, Navbar, Nav } from 'react-bootstrap';
import '../Footer/styles.scss';
// import Images from '../images/';

ClientContent.propTypes = {};

function ClientContent(props) {
  return (
    <div>
      {/* Sticky */}
      <div className="js-sticky">
        <Navbar expand="lg" className="fh5co-main-nav">
          <div className="container-fluid">
            <Nav className="fh5co-menu-1">
              <Nav.Link href="#" data-nav-section="home">
                Home
              </Nav.Link>
              <Nav.Link href="#" data-nav-section="about">
                About
              </Nav.Link>
              <Nav.Link href="#" data-nav-section="features">
                Features
              </Nav.Link>
            </Nav>
            <Navbar.Brand href="index.html" className="fh5co-logo">
              foodee
            </Navbar.Brand>
            <Nav className="fh5co-menu-2">
              <Nav.Link href="#" data-nav-section="menu">
                Menu
              </Nav.Link>
              <Nav.Link href="#" data-nav-section="events">
                Events
              </Nav.Link>
              <Nav.Link href="#" data-nav-section="reservation">
                Reservation
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
      {/* About */}
      <div id="fh5co-about" data-section="about">
        <Row className="to-animate-2">
          <Col md={6} className="fh5co-2col fh5co-bg" style={{ backgroundImage: 'url()' }} />
          <Col md={6} className="fh5co-2col fh5co-text">
            <h2 className="heading to-animate">About Us</h2>
            <p className="to-animate">
              <span className="firstcharacter">F</span>ar far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts
              of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it
              is an almost unorthographic life.
            </p>
            <div className="text-center to-animate">
              <Button href="#" variant="primary" className="btn-outline">
                Get in touch
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      {/* Saying */}
      <div id="fh5co-sayings">
        <Container>
          <Row className="to-animate">
            <Col>
              <Carousel showThumbs={false} infiniteLoop={true}>
                <div>
                  <blockquote>
                    <p>
                      &ldquo;Cooking is an art, but all art requires knowing something about the techniques and
                      materials&rdquo;
                    </p>
                    <p class="quote-author">&mdash; Nathan Myhrvold</p>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <p>
                      &ldquo;Give a man food, and he can eat for a day. Give a man a job, and he can only eat for 30
                      minutes on break.&rdquo;
                    </p>
                    <p class="quote-author">&mdash; Lev L. Spiro</p>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <p>&ldquo;Find something you’re passionate about and keep tremendously interested in it.&rdquo;</p>
                    <p class="quote-author">&mdash; Julia Child</p>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <p>
                      &ldquo;Never work before breakfast; if you have to work before breakfast, eat your breakfast
                      first.&rdquo;
                    </p>
                    <p class="quote-author">&mdash; Josh Billings</p>
                  </blockquote>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Feature */}
      <div id="fh5co-featured" data-section="features">
        <Container>
          <Row className="text-center fh5co-heading row-padded">
            <Col md={{ span: 8, offset: 2 }}>
              <h2 className="heading to-animate">Featured Dishes</h2>
              <p className="sub-heading to-animate">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </Col>
          </Row>
          <div className="row">
            <div className="fh5co-grid">
              <div className="fh5co-v-half to-animate-2">
                <div
                  className="fh5co-v-col-2 fh5co-bg-img"
                  style={{ backgroundImage: 'url(images/res_img_1.jpg)' }}
                ></div>
                <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                  <h2>Fresh Mushrooms</h2>
                  <span className="pricing">$7.50</span>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                  </p>
                </div>
              </div>
              <div className="fh5co-v-half">
                <div className="fh5co-h-row-2 to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: 'url(images/res_img_2.jpg)' }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-left">
                    <h2>Grilled Chiken Salad</h2>
                    <span className="pricing">$12.00</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
                <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: 'url(images/res_img_8.jpg)' }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-right">
                    <h2>Cheese and Garlic Toast</h2>
                    <span className="pricing">$4.50</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
              </div>

              <div className="fh5co-v-half">
                <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: 'url(images/res_img_7.jpg)' }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-right">
                    <h2>Organic Egg</h2>
                    <span className="pricing">$4.99</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
                <div className="fh5co-h-row-2 to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: 'url(images/res_img_6.jpg)' }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text arrow-left">
                    <h2>Salad with Crispy Chicken</h2>
                    <span className="pricing">$8.50</span>
                    <p>Far far away, behind the word mountains.</p>
                  </div>
                </div>
              </div>
              <div className="fh5co-v-half to-animate-2">
                <div
                  className="fh5co-v-col-2 fh5co-bg-img"
                  style={{ backgroundImage: 'url(images/res_img_3.jpg)' }}
                ></div>
                <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                  <h2>Tomato Soup with Chicken</h2>
                  <span className="pricing">$12.99</span>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Type */}
      <div id="fh5co-type" style={{ backgroundImage: 'url(images/slide_3.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="fh5co-overlay"></div>
        <Container>
          <Row>
            <Col md={3} className="to-animate">
              <div className="fh5co-type">
                <h3 className="with-icon icon-1">Fruits</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
              </div>
            </Col>
            <Col md={3} className="to-animate">
              <div className="fh5co-type">
                <h3 className="with-icon icon-2">Sea food</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
              </div>
            </Col>
            <Col md={3} className="to-animate">
              <div className="fh5co-type">
                <h3 className="with-icon icon-3">Vegetables</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
              </div>
            </Col>
            <Col md={3} className="to-animate">
              <div className="fh5co-type">
                <h3 className="with-icon icon-4">Meat</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Menu */}
      <div id="fh5co-menus" data-section="menu">
        <Container>
          <Row className="text-center fh5co-heading row-padded">
            <Col md={8} md-offset={2}>
              <h2 className="heading to-animate">Food Menu</h2>
              <p className="sub-heading to-animate">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </Col>
          </Row>
          <Row className="row-padded">
            <Col md={6}>
              <Card className="fh5co-food-menu to-animate-2">
                <Card.Header className="fh5co-drinks">Drinks</Card.Header>
                <Card.Body>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_5.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Pineapple Juice</h3>
                          <p>Far far away, behind the word mountains</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">
                        <span className="price">$7.99</span>
                      </div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_6.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Orange Juice</h3>
                          <p>Far far away, behind the word mountains</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">
                        <span className="price">$6.99</span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">See More</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="fh5co-food-menu to-animate-2">
                <Card.Header className="fh5co-dishes">Dishes</Card.Header>
                <Card.Body>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_1.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Grilled Beef with potatoes</h3>
                          <p>Far far away, behind the word mountains</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">
                        <span className="price">$19.99</span>
                      </div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_2.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Grilled Pork with Vegetables</h3>
                          <p>Far far away, behind the word mountains</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">
                        <span className="price">$16.99</span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">See More</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Event */}
      <div
        id="fh5co-events"
        data-section="events"
        style={{ backgroundImage: 'url(images/slide_2.jpg)' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="fh5co-overlay"></div>
        <Container>
          <Row className="text-center fh5co-heading row-padded">
            <Col md={{ span: 8, offset: 2 }} className="to-animate">
              <h2 className="heading">Upcoming Events</h2>
              <p className="sub-heading">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="fh5co-event to-animate-2">
                <h3>Kitchen Workshops</h3>
                <span className="fh5co-event-meta">March 19th, 2016</span>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Read More
                  </a>
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="fh5co-event to-animate-2">
                <h3>Music Concerts</h3>
                <span className="fh5co-event-meta">March 19th, 2016</span>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Read More
                  </a>
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="fh5co-event to-animate-2">
                <h3>Free to Eat Party</h3>
                <span className="fh5co-event-meta">March 19th, 2016</span>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    Read More
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClientContent;
