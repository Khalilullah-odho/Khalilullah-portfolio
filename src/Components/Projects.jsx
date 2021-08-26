import React, { useState } from "react";
import { Card, Col, Row, Button } from "antd";
import { FaEye, FaCode } from "react-icons/fa";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import mobitech from "../img/Mobitech.png";
import fakebook from "../img/fakebook.png";

const Projects = () => {
  const [isPreview, setIsPreview] = useState(true);
  return (
    <section className="section2" id="projects">
      <Content className="container">
        <Title level={2} className="head-text">
          Projects
        </Title>
        <div className="project-btns">
          <Button
            size="large"
            icon={<FaEye fontSize={20} style={{ marginRight: 10 }} />}
            type={isPreview ? "primary" : "default"}
            onClick={() => setIsPreview(!isPreview)}
            className="projects-btn"
          >
            Preview
          </Button>
          <Button
            size="large"
            icon={<FaCode fontSize={20} style={{ marginRight: 10 }} />}
            type={!isPreview ? "primary" : "default"}
            onClick={() => setIsPreview(!isPreview)}
          >
            Code
          </Button>
        </div>
        <Row
          gutter={[16, 16]}
          data-aos="fade-up"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col lg={8} md={8} sm={24}>
            <a
              href={
                isPreview
                  ? "http://mobitech-app.herokuapp.com/"
                  : "https://github.com/Khalilullah-odho/Mobitech"
              }
            >
              <Card hoverable cover={<img alt="example" src={mobitech} />} size="small">
                <Card.Meta title="Mobitech Web Application" />
              </Card>
            </a>
          </Col>
          <Col lg={8} md={8} sm={24}>
            <a
              href={
                isPreview
                  ? "https://fb-fakebook.netlify.app/login"
                  : "https://github.com/Khalilullah-odho/fakebook"
              }
            >
              <Card hoverable cover={<img alt="example" src={fakebook} />} size="small">
                <Card.Meta title="Facebook Clone" />
              </Card>
            </a>
          </Col>
        </Row>
      </Content>
    </section>
  );
};

export default Projects;
