import { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { NAV__LINKS } from "../../data";
import "./style.css";

import Button from "../Button";


const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header d-flex justify-content-center align-items-center">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              <li className="close-icon">
                <i class="ri-close-line"></i>
              </li>
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button btnType={'connect-wallet'} link={'wallet'} text={'Connect Wallet'}>
                  <i class="ri-wallet-line pe-1"></i>
                </Button>
              </li>
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <Button btnType={'walletBtn'} link={'wallet'} text={'Connect Wallet'}>
              <i class="ri-wallet-line pe-1"></i>
            </Button>

            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
