import React from "react";
import { Layout, Typography } from "antd";
import DetailCard from "./common/DetailCard";

const Education = () => {
  return (
    <div className="section2" id="education">
      <Layout.Content className="container">
        <Typography.Title className="head-text" level={2}>
          Education
        </Typography.Title>
        <div className="card">
          <DetailCard
            year="2017 - 2020"
            name="Bachelor's Degree"
            title=" Bachelor of Science in Computer Science (BSCS)"
            detail=" University Of Sindh Jamshoro, Sindh, Pakistan."
          />
        </div>
      </Layout.Content>
    </div>
  );
};

export default Education;
