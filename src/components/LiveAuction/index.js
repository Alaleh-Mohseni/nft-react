import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../NftCards";
import { NFT__DATA } from "../../data";

import "./style.css";

const LiveAuction = () => {
  return (
    <section className="live-auction">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live-auction__top d-flex align-items-center justify-content-between ">
              <h3>Live Auction</h3>
              <span className="d-flex justify-content-center align-items-center">
                <Link to="/market">Explore more </Link>
                <i class="ri-arrow-right-s-line fs-5 pt-1 ps-1"></i>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4">
              <NftCard key={item.id} item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
