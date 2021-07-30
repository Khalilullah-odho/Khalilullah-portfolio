import React from "react";
import { Card, Col, Layout, Row, Typography } from "antd";

const Education = () => {
  return (
    <div className="section2" id="education">
      <Layout.Content className="container">
        <Typography.Title className="head-text" level={2}>
          Education
        </Typography.Title>
        <div className="card">
          <Row gutter={[16, 16]} style={{ position: "relative" }}>
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
                    2017 - 2020
                  </p>
                  <div
                    className="h4"
                    style={{ textAlign: "center", color: "#fff" }}
                  >
                    Bachelor's Degree
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={18} md={18} span={24} data-aos="fade-left">
              <Card bordered={false} className="detail-card">
                <div className="detail-card">
                  <div className="h4">
                    Bachelor of Science in Computer Science (BSCS)
                  </div>
                  <div className="category" style={{ color: "#949494" }}>
                    University Of Sindh Jamshoro, Sindh, Pakistan.
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

export default Education;
