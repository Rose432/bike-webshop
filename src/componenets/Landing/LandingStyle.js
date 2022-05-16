import styled from "styled-components";
import Img from "../../assets/images/landing2.jpg";

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
  height: 88vh;
  position: relative;
`;

export const LandingInner = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  left: calc((100% - 1260px) / 2);
  width: 1260px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const Title = styled.h1`
  color: #f0fdf9;
  font-size: 86px;
  text-align: center;
`;

export const Subtitle = styled.span`
  font-size: 24px;
  color: #f0fdf9;
`;
