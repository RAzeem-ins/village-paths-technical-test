import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Form, Input, Row, Col } from "antd";
import StyledButton from "../../shared/button/Button";
import { login } from "./authenticationSlice";

function SignupPage(props) {
  const { signUp, signupError, loading } = props;
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const loader = useSelector((state) => state.authentication.loader);

  const dispatch = useDispatch();

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
            onFinish={() => {
              signUp(email, password, firstName, lastName);
            }}
          >
            {signupError && <p style={{ color: "red" }}>{signupError}</p>}
            <Row>
              <Col span="24">
                <Form.Item
                  style={{ padding: "12px 0 0" }}
                  name="email"
                  className="border-radius form-input"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email",
                    },
                    {
                      type: "email",
                      message:
                        "The email format doesn’t look right. Please try again",
                    },
                  ]}
                >
                  <Input
                    placeholder="eg., email@address.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span="12">
                <Form.Item
                  name="First Name"
                  className="border-radius"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="eg., Jon"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span="11">
                <Form.Item
                  name="Last Name"
                  className="border-radius"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="eg., Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              style={{ paddingBottom: "2.25rem" }}
              name="password"
              className="border-radius"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item style={{ paddingBottom: "2.25rem" }}>
              <StyledButton loading={loader} htmlType="submit">
                Continue
              </StyledButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignupPage;
