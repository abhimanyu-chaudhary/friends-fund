import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";
import { FaUserTie } from "react-icons/fa";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Members</h1>
            <p className="font13">
            Meet the incredible individuals who make up our close-knit community. Each member brings their unique 
              <br />
              charm, stories, and memories that keep our bond strong and unbreakable. Together, we celebrate friendship
              <br/>
              and cherish moments that last a lifetime.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <div className="h-full rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="p-8 flex flex-col gap-9">
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Abhimanyu Chaudhary</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Abhinav Anand</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Ajit Kumar Yadav</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Amrit Bikram Sah</h3>
                  </div>
                </div>
              </div>
            </TableBox>
            <TableBox>
              <div className="h-full rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="p-8 flex flex-col gap-9">
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Bikash Shrestha</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Krishna Chandra Mandal</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Kunal Mishra</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Prem Kant Sharma</h3>
                  </div>
                </div>
              </div>
            </TableBox>
            <TableBox>
              <div className="h-full rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="p-8 flex flex-col gap-9">
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Rajat Prasad Gupta</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Rajesh Sada</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Ramji Sada</h3>
                  </div>
                  <div className="flex gap-4 font-semibold bg-gray-100 h-20 items-center pl-2 rounded-[8px]">
                    <FaUserTie className="text-3xl"/>
                    <h3>Ravi Shah</h3>
                  </div>
                </div>
              </div>
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




