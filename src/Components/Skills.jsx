import React from "react";
import { Layout, Card, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

const Skills = () => {
  return (
    <div className="section2" id="skills">
      <Layout.Content className="container">
        <Title level={2} className="head-text">
          PROFESSIONAL SKILLS
        </Title>
        <div className="card" data-aos="fade-up">
          <Row gutter={[16, 16]}>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">HTML 5</p>
                  <p className="skill-name">90%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-html"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">CSS 3</p>
                  <p className="skill-name">80%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-css"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">JavaScript</p>
                  <p className="skill-name">70%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-javascript"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">React Js</p>
                  <p className="skill-name">65%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-react"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">Node</p>
                  <p className="skill-name">60%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-node"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">MongoDB</p>
                  <p className="skill-name">75%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-mongo"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
            <Col lg={12} span={24}>
              <Card bordered={false}>
                <div className="skill-header">
                  <p className="skill-name">Java</p>
                  <p className="skill-name">50%</p>
                </div>
                <div className="skills-container">
                  <div
                    className="skills"
                    data-aos="progress-java"
                    data-aos-offset="40px"
                  ></div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </div>
  );
};

export default Skills;
