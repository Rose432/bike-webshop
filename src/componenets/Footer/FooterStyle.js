import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const FooterContainer = styled.footer`
  width: 300px;
  margin: 0 auto;
  display: grid;
  gap: 30px;

  @media (${breakpoints.tabletMedium}) {
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    grid-template-columns: 1.2fr 0.6fr 1.2fr;
    justify-items: center;
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.secondary};
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 16px;

  @media (${breakpoints.tabletMedium}) {
    font-size: 1.8rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 16px;
`;

export const LogoImgContainer = styled.div`
  position: relative;
  height: 30px;
  width: 38px;
  overflow: hidden;
`;

export const LogoDownLine = styled.div`
  content: "";
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 1px;
  width: 30px;
  background-color: #c3fae8;
`;

export const LogoLeftLine = styled.div`
  content: "";
  position: absolute;
  left: -9px;
  height: 1px;
  width: 60px;
  background-color: #c3fae8;
  transform: rotate(-55deg);
`;

export const LogoRightLine = styled.div`
  content: "";
  top: 12px;
  left: 19px;
  position: absolute;
  height: 1px;
  width: 22px;
  background-color: #c3fae8;
  transform: rotate(55deg);
`;

export const LogoLink = styled.div`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 700;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;

  @media (${breakpoints.tabletMedium}) {
    font-size: 1.6rem;
  }

  @media (${breakpoints.tablet}) {
    font-size: 1.4rem;
  }

  @media (${breakpoints.desktop}) {
    font-size: 1.6rem;
  }
`;

export const Adress = styled.p`
  line-height: 1.3;
  margin-bottom: 16px;
  font-size: 1.6rem;
`;

export const PhoneNumber = styled.span`
  font-size: 1.6rem;
`;

export const Email = styled.span`
  font-size: 1.6rem;
`;

export const NewsletterContainer = styled.div``;

export const SignInNewsletter = styled.span`
  font-size: 1.6rem;
`;
