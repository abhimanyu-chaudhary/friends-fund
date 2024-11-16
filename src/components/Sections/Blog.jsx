import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="features">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Features</h1>
            <p className="font13">
            Our Features highlight the core values and functionalities that make Friend's Fund unique. From seamless financial 
              <br />
              management to fostering trust and community support, every feature is designed to strengthen connections and 
              <br />
              simplify your journey. Experience transparency, flexibility, and security like never before.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Transparency"
                text="Every transaction is logged and accessible by members."
                tag="company"
                author="Ensuring trust with complete visibility."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Flexible Loans"
                text="Quick loans with interest-free benefits under FF terms and conditions."
                tag="company"
                author="Providing support when you need it."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Personalized Dashboards"
                text="Track your contributions, loans and activity in real-time."
                tag="company"
                author="Your finances, your control, anytime."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Seamless Management"
                text="Streamlined tools for tracking and managing funds."
                tag="company"
                author="Simplifying your financial journey."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Community Support"
                text="Contribute to causes and help friends in emergency situations."
                tag="company"
                author="Together, we create a difference."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Secure Transactions"
                text="Your data, transactions and funds are fully protected."
                tag="company"
                author="Prioritizing safety for peace of mind."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
            Hear how Friend's Fund has brought value to their lives, strengthened friendships, and made managing 
              <br />
              finances effortless. Their words reflect the trust and community we aim to build every day.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;