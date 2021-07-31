import React from "react";
import { Layout, Typography } from "antd";
import DetailCard from "./common/DetailCard";

const Certification = () => {
  return (
    <div className="section2" id="certification">
      <Layout.Content className="container">
        <Typography.Title className="head-text" level={2}>
          Certifications
        </Typography.Title>
        <div className="card">
          <DetailCard
            year="Nov 2019-Jan 2020"
            name="Graphic Design"
            title=" 3 months graphic design course under DigiSkills Training
            Program ."
            detail="GRAPHIC DESIGN ."
          />
        </div>
        <div className="card">
          <DetailCard
            year="2020"
            month="September"
            name="Cyber Security"
            title="1 day Seminar arranged by GYD (Gaddi Youth Development) in
              collaboration with Cott Academy."
            detail="Cyber Security | Freelancing | Android"
          />
        </div>
      </Layout.Content>
    </div>
  );
};

export default Certification;
