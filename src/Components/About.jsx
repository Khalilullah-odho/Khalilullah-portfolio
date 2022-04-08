import React from "react";
import { Layout, Row, Col, Card } from "antd";
import Title from "antd/lib/typography/Title";

const About = () => {
  return (
    <div className="section" id="about">
      <Layout.Content className="container">
        <div className="card">
          <Row gutter={[16, 16]}>
            <Col lg={12} sm={24} md={24} data-aos="fade-right">
              <Card bordered={false} title={<Title level={2}>About Me</Title>}>
                <p className="info-text">
                  Hello I'm <strong>Khalilullah</strong>
                </p>
                <p className="info-text">
                  I am passionate Programmer my core expertise is at React.js &
                  React Native Frontend Developement. Always at forefront to
                  grasp the concept and overview of modern technologies. I have
                  outstanding knowledge of React Redux, Redux thunk
                  (ReduxToolkit), React Hooks, Java Core, C, Data Structures and
                  Algorithms too.
                </p>
              </Card>
            </Col>
            <Col lg={12} sm={24} md={24} data-aos="fade-left">
              <Card
                bordered={false}
                title={<Title level={2}>Basic Information</Title>}
              >
                <div>
                  <h3 className="info-title">Email</h3>
                  <p className="info-text basic">odhokhalilullah@gmail.com</p>
                  <p className="info-text basic">odhokhalilullah@outlook.com</p>
                </div>
                <div>
                  <h3 className="info-title">Phone</h3>
                  <p className="info-text basic">+923147939646</p>
                </div>
                <div>
                  <h3 className="info-title">Address</h3>
                  <p className="info-text basic">
                    Flat# 302, 3rd Floor 12-C,Tauheed Commercial, St # 29, Phase
                    V DHA, Karachi
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </div>
  );
};

export default About;
