import React from "react";
import { Layout } from "antd";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Layout.Content className="container">
        <div className="footer">
          <div className="footer-icons">
            <a href="https://www.facebook.com/khalil.odho.37">
              <FaFacebookSquare className="f-icon" />
            </a>
            <a href="https://pk.linkedin.com/in/khalilullah-odho-13b2821b5">
              <FaLinkedin className="f-icon" />
            </a>
            <a href="https://github.com/Khalilullah-odho">
              <FaGithubSquare className="f-icon" />
            </a>
          </div>
          <h1>Khalilullah Odho</h1>
          <p className="copyright-text basic">
            © 2021 Khalilullah, All Rights Reserved.
          </p>
        </div>
      </Layout.Content>
    </footer>
  );
};

export default Footer;
