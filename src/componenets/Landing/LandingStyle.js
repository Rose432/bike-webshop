import styled from "styled-components";
import Img from "../../assets/images/landing2.jpg";
import { colors, breakpoints } from "../../lib/style/theme";
import { Link } from "react-router-dom";

export const Landing = styled.div`
  background-image: linear-gradient(
      rgba(1, 25, 15, 0.65),
      rgba(1, 25, 15, 0.65)
    ),
    url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 90vh;
  position: relative;
`;

export const LandingInner = styled.div`
  position: absolute;
  padding: 0 10px;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;

  @media (${breakpoints.tabletMedium}) {
    padding: 0 24px;
  }

  @media (${breakpoints.destkop}) {
    padding: 0;
    width: 960px;
    left: calc((100% - 960px) / 2);
  }

  @media (${breakpoints.destkopLarge}) {
    width: 1260px;
    left: calc((100% - 1260px) / 2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (${breakpoints.tablet}) {
    gap: 48px;
  }
`;

export const Title = styled.h1`
  color: ${colors.secondary};
  font-size: 30px;
  text-align: center;

  @media (${breakpoints.mobileLarge}) {
    font-size: 36px;
  }

  @media (${breakpoints.tabletSmall}) {
    font-size: 44px;
  }

  @media (${breakpoints.tabletMedium}) {
    font-size: 52px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 62px;
  }

  @media (${breakpoints.destkop}) {
    font-size: 74px;
  }

  @media (${breakpoints.destkopLarge}) {
    font-size: 86px;
  }
`;

export const Subtitle = styled.span`
  width: 250px;
  font-size: 16px;
  color: ${colors.secondary};
  text-align: center;

  @media (${breakpoints.mobileLarge}) {
    width: 300px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 350px;
    font-size: 18px;
  }

  @media (${breakpoints.tabletMedium}) {
    width: 400px;
    font-size: 20px;
  }

  @media (${breakpoints.tablet}) {
    width: 450px;
    font-size: 24px;
  }

  @media (${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ButtonLink = styled(Link)``;
