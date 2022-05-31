import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const BikeCard = styled.div`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px ${colors.primary};
  flex-basis: 242.5px;

  @media (${breakpoints.destkopLarge}) {
    flex-basis: 307.5px;
  }

  &:hover {
    figure {
      box-shadow: 0px 2px 5px ${colors.textPrimary};
    }
    img {
      transform: scale(1.1);
    }
    p {
      color: ${colors.primary};
    }
  }
`;

export const FigureLink = styled(Link)`
  width: 100%;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  @media (${breakpoints.tablet}) {
    height: 300px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TitleLink = styled(Link)``;

export const Title = styled.p`
  font-size: 24px;
  color: ${colors.textPrimary};
  transition: all 0.3s ease-in-out;
`;

export const Price = styled.span`
  font-size: 18px;
  color: ${colors.textPrimary};
  transition: all 0.3s ease-in-out;
  margin-bottom: 12px;
`;
