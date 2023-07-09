import { Container, Row, Col } from "reactstrap";
import "./style.css";
import Button from "../Button";

import heroImg from "../../assets/images/img-3.webp";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero-section__content">
              <h2>
                Discover rare digital art and collect
                <span>sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi omnis neque adipisci sequi ullam unde in
                minus quis quos.
              </p>

              <div className="hero-section__btns d-flex align-items-center gap-4">
                <Button link={'market'} text={'Explore'} btnType={'explore'}>
                  <i class="ri-rocket-line"></i>{" "}
                </Button>
                <Button link={'create'} text={'Create'} btnType={'create'}>
                  <i class="ri-ball-pen-line"></i>
                </Button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero-section__img">
              <img src={heroImg} alt="nft hero" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
