import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UnauthorizedLayout from "../layouts/UnauthorizedLayout";
import SignupPage from "../features/OnBoarding/SignupPage";
import Header from "../shared/headers/Header";
import AccoutnImg from "../../assets//svg/user-cards.svg";
import JoinOrgImg from "../../assets/svg/join-org.svg";
import JoiningCards from "../../assets/svg/user-cards.svg";

const Signup = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <UnauthorizedLayout photo={JoiningCards} >
        <div className="steps-content"><Signup/></div>
      </UnauthorizedLayout>
    </div>
  );
};

export default Signup;
