import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Modal from "../Modal";

const NftCard = ({item}) => {
  // const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={item.imgUrl} alt="nft" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${item.id}`}>{item.title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={item.creatorImg} alt="creator" className="w-100 rounded-circle" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{item.creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{item.currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i class="ri-shopping-bag-line"></i> Place Bid
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
