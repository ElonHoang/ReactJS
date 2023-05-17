import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Footer/styles.scss';
ClientHeader.propTypes = {};

function ClientHeader(props) {
  return (
    <div>
      <div id="fh5co-home" className="js-fullheight" data-section="home">
        <Carousel className="flexslider">
          <Carousel.Item
            style={{
              backgroundImage: 'url(images/slide_1.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh',
            }}
          >
            <div className="fh5co-overlay"></div>
            <div className="fh5co-text">
              <Container>
                <Row>
                  <Col>
                    <h1 className="to-animate">foodee</h1>
                    <h2 className="to-animate">
                      Lovely Designed <span>by</span>{' '}
                      <a href="http://freehtml5.co/" target="_blank">
                        freehtml5.co
                      </a>
                    </h2>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: 'url(images/slide_2.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh',
            }}
          >
            <div className="fh5co-overlay"></div>
            <div className="fh5co-text">
              <Container>
                <Row>
                  <Col>
                    <h1 className="to-animate">foodee</h1>
                    <h2 className="to-animate">
                      Lovely Designed <span>by</span>{' '}
                      <a href="http://freehtml5.co/" target="_blank">
                        freehtml5.co
                      </a>
                    </h2>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: 'url(images/slide_3.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh',
            }}
          >
            <div className="fh5co-overlay"></div>
            <div className="fh5co-text">
              <Container>
                <Row>
                  <Col>
                    <h1 className="to-animate">foodee</h1>
                    <h2 className="to-animate">
                      Lovely Designed <span>by</span>{' '}
                      <a href="http://freehtml5.co/" target="_blank">
                        freehtml5.co
                      </a>
                    </h2>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ClientHeader;
