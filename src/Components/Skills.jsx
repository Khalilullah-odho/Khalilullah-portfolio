import React from "react";
import { Layout, Card, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

const Skills = () => {
  const skills = [
    {
      id: 1,
      skillName: "html 5",
      skillPercent: "90%",
      skillAos: "progress-html",
    },
    {
      id: 2,
      skillName: "css 3",
      skillPercent: "80%",
      skillAos: "progress-css",
    },
    {
      id: 3,
      skillName: "javascript",
      skillPercent: "70%",
      skillAos: "progress-javascript",
    },
    {
      id: 4,
      skillName: "react js",
      skillPercent: "70%",
      skillAos: "progress-react",
    },
    {
      id: 5,
      skillName: "node js",
      skillPercent: "50%",
      skillAos: "progress-node",
    },
    {
      id: 6,
      skillName: "mongodb",
      skillPercent: "60%",
      skillAos: "progress-mongo",
    },
    {
      id: 7,
      skillName: "core java",
      skillPercent: "50%",
      skillAos: "progress-java",
    },
  ];
  return (
    <div className="section2" id="skills">
      <Layout.Content className="container">
        <Title level={2} className="head-text">
          PROFESSIONAL SKILLS
        </Title>
        <div className="card" data-aos="fade-up">
          <Row gutter={[16, 16]}>
            {skills.map((skill) => (
              <Col lg={12} span={24} key={skill.id}>
                <Card bordered={false}>
                  <div className="skill-header">
                    <p className="skill-name">{skill.skillName} </p>
                    <p className="skill-name">{skill.skillPercent}</p>
                  </div>
                  <div className="skills-container">
                    <div
                      className="skills"
                      data-aos={skill.skillAos}
                      data-aos-offset="40px"
                    ></div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Layout.Content>
    </div>
  );
};

export default Skills;
