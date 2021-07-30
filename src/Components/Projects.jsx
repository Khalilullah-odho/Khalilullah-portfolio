import React from "react";
import { Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import mobitech from "../img/Mobitech.png";

const Projects = () => {
  return (
    <section className="section2" id="projects">
      <Content className="container">
        <Title level={2} className="head-text">
          Projects
        </Title>
        <Row
          gutter={[16, 16]}
          data-aos="fade-up"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Col lg={12} md={12} span={24}>
            <Card
              hoverable
              cover={<img alt={mobitech} src={mobitech} />}
              size="small"
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col> */}
          <Col lg={6} md={6} span={12}>
            <a href="http://mobitech-app.herokuapp.com/">
              <Card
                hoverable
                cover={<img alt="example" src={mobitech} />}
                size="small"
              >
                <Card.Meta
                  title="Mobitech Web Application"
                  description="http://mobitech-app.herokuapp.com/"
                />
              </Card>
            </a>
          </Col>
        </Row>
      </Content>
    </section>
  );
};

export default Projects;
