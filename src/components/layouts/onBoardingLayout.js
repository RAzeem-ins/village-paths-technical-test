import React from "react";
import { Row, Col } from "antd";
import LeftArrow from "../shared/button/LeftArrow";

const OnBoardingLayout = (props) => {
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={13}
        span={13}
        style={{ paddingTop: "3rem" }}
      >
        <Row>
          <Col
            xs={{ span: 23, offset: 1 }}
            sm={{ span: 23, offset: 1 }}
            md={{ span: 1, offset: 1 }}
          >
            <span style={{ cursor: "pointer" }}>
              <LeftArrow />
            </span>
          </Col>
          <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
          >
            {props.children}
          </Col>
        </Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={11}
        span={11}
        className="onBoarding-img-section"
      >
        <div style={{ marginTop: "3rem" }}>
          <img className={`img-org`} src={props.photo} alt="onboarding logo" />
        </div>
      </Col>
    </Row>
  );
};
export default OnBoardingLayout;
