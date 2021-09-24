import React from "react";
import { Row, Col } from "antd";
import LeftArrowSvg from '../../assets/svg/arrow-left.svg'
import './UnauthorizedLayout.css';
const UnauthorizedLayout = (props) => {
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
            <span className="left-btn">
            <img  src={LeftArrowSvg}
    alt="Arrow-Svg"
    style={{
      padding: '.5rem',
      borderRadius: '50%',
      border: '1px solid lightGrey',
    }}
  />
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
        className="img-section"
      >
        <div className="img-container">
          <img className="img-tag" src={props.photo} alt="Side-Logo" />
        </div>
      </Col>
    </Row>
  );
};
export default UnauthorizedLayout;
