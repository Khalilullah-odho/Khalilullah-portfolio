import React from "react";
import { Card, Col, Layout, Row, Typography } from "antd";

const Certification = () => {
  return (
    <div className="section2" id="certification">
      <Layout.Content className="container">
        <Typography.Title className="head-text" level={2}>
          Certifications
        </Typography.Title>
        <div className="card">
          <Row
            gutter={16}
            style={{ position: "relative", marginBottom: "3rem" }}
          >
            <Col lg={6} md={6} span={24} data-aos="fade-right">
              <Card
                bordered={false}
                style={{ backgroundColor: "#1890ff" }}
                className="detail-card"
              >
                <div
                  className="detail-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ textAlign: "center", color: "#fff" }}>
                    Nov 2019-Jan 2020
                  </p>
                  <div
                    className="h4"
                    style={{ textAlign: "center", color: "#fff" }}
                  >
                    Graphic Design
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={18} md={18} span={24} data-aos="fade-left">
              <Card bordered={false} className="detail-card">
                <div className="detail-card">
                  <div className="h4">
                    3 months graphic design course under DigiSkills Training
                    Program .
                  </div>
                  <div className="category" style={{ color: "#949494" }}>
                    GRAPHIC DESIGN .
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="card">
          <Row gutter={16} style={{ position: "relative" }}>
            <Col lg={6} md={6} span={24} data-aos="fade-right">
              <Card
                bordered={false}
                style={{ backgroundColor: "#1890ff" }}
                className="detail-card"
              >
                <div
                  className="detail-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ textAlign: "center", color: "#fff" }}>2020</p>
                  <div
                    className="h4"
                    style={{ textAlign: "center", color: "#fff" }}
                  >
                    Cyber Security
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={18} md={18} span={24} data-aos="fade-left">
              <Card bordered={false} className="detail-card">
                <div className="detail-card">
                  <div className="h4">
                    1 day Seminar arranged by GYD (Gaddi Youth Development) in
                    collaboration with Cott Academy.
                  </div>
                  <div className="category" style={{ color: "#949494" }}>
                    Cyber Security | Freelancing | Android
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </div>
  );
};

export default Certification;
