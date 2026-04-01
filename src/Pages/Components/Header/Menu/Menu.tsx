import "./Menu.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faInfo,
  faPager,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () => {
  const [tog, setTog] = useState<boolean>(false);
  const location = useLocation();

  const clickAny = () => {
    setTog(false);
  };

  return (
    <>
      <button
        className="btn listSides"
        type="button"
        onClick={() => setTog(!tog)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon className="fontAwsemList" icon={faBars} />
      </button>

      <div
        className={`offcanvas offcanvas-start ${tog ? "show" : ""}`}
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <span className="yTitle">M</span>y <span className="yTitle">P</span>
            ort
            <span className="yTitle">f</span>olio
          </h5>
          <button
            type="button"
            className="closBtn"
            onClick={() => setTog(false)}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="bodyNav">
            <Link
              to={"/"}
              className={`navi-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={clickAny}
            >
              <span className="oneLinkOnSide">
                <span className="iconWithOneLink">
                  <FontAwesomeIcon className="iconForLink" icon={faHouse} />
                </span>
                <span className="icory ps-4">Home</span>
              </span>
            </Link>

            <Link
              to={"/about"}
              className={`navi-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={clickAny}
            >
              <span className="oneLinkOnSide">
                <span className="iconWithOneLink">
                  <FontAwesomeIcon className="iconForLink" icon={faInfo} />
                </span>
                <span className="icory ps-5">About</span>
              </span>
            </Link>

            <Link
              to={"/myprojects"}
              className={`navi-link ${
                location.pathname === "/myprojects" ? "active" : ""
              }`}
              onClick={clickAny}
            >
              <span className="oneLinkOnSide">
                <span className="iconWithOneLink">
                  <FontAwesomeIcon className="iconForLink" icon={faPager} />
                </span>
                <span className="icory ps-4">Projects</span>
              </span>
            </Link>

            <Link
              to={"/myskills"}
              className={`navi-link ${
                location.pathname === "/myskills" ? "active" : ""
              }`}
              onClick={clickAny}
            >
              <span className="oneLinkOnSide">
                <span className="iconWithOneLink">
                  <FontAwesomeIcon
                    className="iconForLink"
                    icon={faLayerGroup}
                  />
                </span>
                <span className="icory ps-4">Skills</span>
              </span>
            </Link>

            <Link
              to={"/contactme"}
              className={`navi-link ${
                location.pathname === "/contactme" ? "active" : ""
              }`}
              onClick={clickAny}
            >
              <span className="oneLinkOnSide">
                <span className="iconWithOneLink">
                  <FontAwesomeIcon className="iconForLink" icon={faPhone} />
                </span>
                <span className="icory ps-4">Contact</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;