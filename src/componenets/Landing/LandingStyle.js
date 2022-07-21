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
  height: 100vh;
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

  @media (${breakpoints.desktop}) {
    padding: 0;
    width: 960px;
    left: calc((100% - 960px) / 2);
  }

  @media (${breakpoints.desktopLarge}) {
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
  font-size: 3rem;
  text-align: center;

  @media (${breakpoints.mobileLarge}) {
    font-size: 3.6rem;
  }

  @media (${breakpoints.tabletSmall}) {
    font-size: 4.4rem;
  }

  @media (${breakpoints.tabletMedium}) {
    font-size: 5.2rem;
  }

  @media (${breakpoints.tablet}) {
    font-size: 6.2rem;
  }

  @media (${breakpoints.desktop}) {
    font-size: 7.4rem;
  }

  @media (${breakpoints.desktopLarge}) {
    font-size: 8.6rem;
  }
`;

export const Subtitle = styled.span`
  width: 250px;
  font-size: 1.6rem;
  color: ${colors.secondary};
  text-align: center;

  @media (${breakpoints.mobileLarge}) {
    width: 300px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 350px;
    font-size: 1.8rem;
  }

  @media (${breakpoints.tabletMedium}) {
    width: 400px;
    font-size: 2rem;
  }

  @media (${breakpoints.tablet}) {
    width: 450px;
    font-size: 2.4rem;
  }

  @media (${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const CtaLink = styled(Link)``;

export const Cta = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 10px 20px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  text-transform: uppercase;
  transition: box-shadow 0.3s ease-in-out;
  font-weight: 500;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 1px 4px ${colors.black};
  }
`;
