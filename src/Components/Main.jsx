import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button, Tooltip } from "antd";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

import cv from "../img/Khalilullah.pdf";
import myImg from "../img/myImg.jpg";

const Main = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="main">
          <div className="overlay"></div>
          <div className="content container">
            <div className="profile" data-aos="zoom-in" data-aos-once="true">
              <img src={myImg} alt="Khalil" className="profile-image" />
            </div>
            <div data-aos="zoom-in" data-aos-once="true" data-aos-offset="0px">
              <div className="title">Khalilullah Odho</div>
              <p className="role">REACT DEVELOPER</p>
            </div>
            <div className="info-btn">
              <Button type="primary" shape="round" className="download-btn">
                <Link smooth to="#contact">
                  Hire Me
                </Link>
              </Button>
              <a download={cv} href={cv}>
                <Button type="primary" shape="round" className="download-btn">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="follow-me">
          <Tooltip title="Follow me on Github" color="#8f8f8f">
            <a href="https://github.com/Khalilullah-odho">
              <Button
                type="primary"
                icon={<FaGithub style={{ fontSize: "1em" }} />}
                size="large"
                shape="circle"
                style={{ width: "3.5rem", height: "3.5rem" }}
              />
            </a>
          </Tooltip>
          <Tooltip title="Follow me on Facebook" color="#8f8f8f">
            <a href="https://www.facebook.com/khalil.odho.37">
              <Button
                type="primary"
                icon={<FaFacebookF style={{ fontSize: "1em" }} />}
                size="large"
                shape="circle"
                style={{ width: "3.5rem", height: "3.5rem" }}
              />
            </a>
          </Tooltip>
          <Tooltip
            title="Follow me on LinkedIn"
            mouseEnterDelay={0.2}
            color="#8f8f8f"
          >
            <a href="https://pk.linkedin.com/in/khalilullah-odho-13b2821b5">
              <Button
                type="primary"
                icon={<FaLinkedinIn style={{ fontSize: "1em" }} />}
                size="large"
                shape="circle"
                style={{ width: "3.5rem", height: "3.5rem" }}
              />
            </a>
          </Tooltip>
        </div>
      </section>
    </>
  );
};

export default Main;
