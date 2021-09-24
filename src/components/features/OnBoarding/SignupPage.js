import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Form, Input, Row, Col } from "antd";
import { login } from "./authenticationSlice";
import './SignupPage.css'

function SignupPage(props) {
  const loader = useSelector((state) => state.authentication.loader);

  const dispatch = useDispatch();
  const  onSubmit = (data)=>{
    const {email,firstName,lastName,password}= data.user;
    console.log(email,firstName,lastName,password)
  }
  return (
    <div>
      <div>
        <h1>Let's get to know you...</h1>
        <p>Tell us more about yourself.</p>
      </div>
      <Row>
        <Col xs={24} sm={24} md={15} lg={13}>
          <Form
            layout="vertical"
            name="basic"
            size="large"
            initialValues={{ remember: false }}
            onFinish={onSubmit}
          >
            <Row>
              <Col span="24">
                <Form.Item
                  name={["user","email"]}
                  className="emailPadding border-radius form-input"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email",
                    },
                    {
                      type: "email",
                      message:
                        "Please provide valid email",
                    },
                  ]}
                >
                  <Input
                    placeholder="eg., email@address.com"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span="12">
                <Form.Item
                  name={["user","firstName"]}
                  className="border-radius"
                  rules={[{ required: true, message: "first name is required"  }]}
                >
                  <Input
                    placeholder="eg., Jon"
                  />
                </Form.Item>
              </Col>
              <Col span="11">
                <Form.Item
                  name={["user","lastName"]}
                  className="border-radius"
                  rules={[{ required: true, message: "last name is required" }]}
                >
                  <Input
                    placeholder="eg., Doe"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name={["user","password"]}
              className=" paddingBottom border-radius"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                  message: `must be at least 8 characters long,contain special character,one uppercase,one lowercase,and numbers`,
                },
              ]}
            >
              <Input.Password
                placeholder="Create a password"
              />
            </Form.Item>
            <Form.Item className="paddingBottom" >
              <button type="submit" id="continue-btn">
                Continue 
              </button>
              
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignupPage;
