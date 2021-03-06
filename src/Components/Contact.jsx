import React from "react";
import { Col, Layout, Row, Card } from "antd";
import Title from "antd/lib/typography/Title";

const Contact = () => {
  return (
    <div className="section2" id="contact">
      <div className="cc-contact">
        <Layout.Content className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col>
              <Card
                bordered={false}
                className="contact-card"
                title={<Title level={2}>Contact</Title>}
                data-aos="zoom-in"
              >
                <div>
                  <h3 className="info-title">Email</h3>
                  <p className="info-text basic">odhokhalilullah@outlook.com</p>
                  <p className="info-text basic">odhokhalilullah@gmail.com</p>
                </div>
                <div>
                  <h3 className="info-title">Phone</h3>
                  <p className="info-text basic">+923147939646</p>
                </div>
                <div>
                  <h3 className="info-title">Address</h3>
                  <p className="info-text basic">
                    House # B-52/1 Phase II Qasimabad, Hyderabad, Sindh,
                    Pakistan
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </div>
    </div>
  );
};

export default Contact;
