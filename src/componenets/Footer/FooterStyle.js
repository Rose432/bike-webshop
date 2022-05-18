import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const FooterContainer = styled.footer`
  width: 300px;
  margin: 0 auto;
  display: grid;
  gap: 30px;
  /* grid-template-columns: 1.2fr 0.6fr 1.2fr; */
  /* justify-items: center; */

  @media (${breakpoints.tabletMedium}) {
    width: 400px;
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
  font-size: 18px;
  /* font-size: 20px; */
  margin-bottom: 16px;

  @media (${breakpoints.tabletMedium}) {
    font-size: 20px;
  }
`;

export const LogoContainer = styled.div`
  /* width: 100px; */
  margin-bottom: 8px;
`;

export const Logo = styled.a`
  font-size: 24px;
  color: ${colors.black};
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 14px;
  /* font-size: 16px; */
  line-height: 1.3;

  @media (${breakpoints.tabletMedium}) {
    font-size: 16px;
  }
`;

export const Adress = styled.p`
  line-height: 1.3;
  margin-bottom: 16px;
`;

export const PhoneNumber = styled.span``;

export const Email = styled.span``;

export const NewsletterContainer = styled.div``;

export const SignInNewsletter = styled.span``;
