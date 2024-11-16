import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import { FaHandsHelping } from "react-icons/fa";
import { FaVault } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <FaHandsHelping style={{ fontSize: '60px' }} />;
      break;
    case "monitor":
      getIcon = <FaVault style={{ fontSize: '60px' }} />;
      break;
    case "browser":
      getIcon = <GiTakeMyMoney style={{ fontSize: '60px' }} />;
      break;
    case "printer":
      getIcon = <FaPeopleGroup style={{ fontSize: '60px' }} />;
      break;
    default:
      getIcon = <FaHandsHelping style={{ fontSize: '60px' }} />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;