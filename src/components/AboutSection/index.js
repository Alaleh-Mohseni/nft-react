import { Container, Row, Col } from "reactstrap";
import "./style.css";

import aboutImg from "../../assets/images/img-1.webp";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section__img">
              <img src={aboutImg} alt="nft about" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about-section__content">
              <h2>
                Discover rare digital art and collect
                <span>sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi omnis neque adipisci sequi ullam unde in
                minus quis quos.
              </p>

              <div className="about-section__btn d-flex align-items-center gap-4">
                <Button link={'#'} text={'Join Us'}>
                  <i class="ri-link"></i>{" "}
                </Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutSection
