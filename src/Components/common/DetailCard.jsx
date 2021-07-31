import React from "react";
import { Card, Col, Row } from "antd";

const DetailCard = ({ year, month, name, title, detail }) => {
  return (
    <Row gutter={16} style={{ position: "relative", marginBottom: "3rem" }}>
      <Col lg={6} md={6} span={24} data-aos="fade-right">
        <Card bordered={false} style={{ backgroundColor: "#1890ff" }}>
          <div className="detail-card">
            <p className="p">
              {year} <br />
              {month}
            </p>
            <div className="h4 p"> {name} </div>
          </div>
        </Card>
      </Col>
      <Col lg={18} md={18} span={24} data-aos="fade-left">
        <Card bordered={false}>
          <div className="detail-card">
            <div className="h4">{title}</div>
            <div className="category" style={{ color: "#949494" }}>
              {detail}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailCard;
