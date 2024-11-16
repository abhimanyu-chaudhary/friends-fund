import React from 'react'
import TestimonialSlider from "../Elements/TestimonialSlider";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";

const Testimonials = () => {
  return (
    <div>
       <Wrapper id="testimonials">
        <div className="lightBg" style={{padding: '50px 0'}}>
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
        </div>
        </Wrapper> 
    </div>
  )
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

export default Testimonials;
