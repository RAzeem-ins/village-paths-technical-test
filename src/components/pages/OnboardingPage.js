import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OnBoardingLayout from "../layouts/onBoardingLayout";
import SignupPage from "../features/OnBoarding/SignupPage";
import Header from "../shared/headers/Header";
import AccoutnImg from "../../assets//svg/user-cards.svg";
import JoinOrgImg from "../../assets/svg/join-org.svg";
import JoiningCards from "../../assets/svg/user-cards.svg";

const images = [JoiningCards, AccoutnImg, JoinOrgImg];
let titlesArray = ["terms"];

const OnboardingPage = (props) => {
  const [current, setCurrent] = useState(0);
  const [signupError, setSignupError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const steps = [
    {
      title: "signup",
      content: (
        <SignupPage
          loading={loading}
          signupError={signupError}
          signUp={null}
         />
      ),
    },
  ];
  return (
    <div>
      <Header />
      <OnBoardingLayout photo={images[current]} active={current}>
        <div className="steps-content">{steps[current].content}</div>
      </OnBoardingLayout>
    </div>
  );
};

export default OnboardingPage;
