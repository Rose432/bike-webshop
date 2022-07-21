import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;

  @media (${breakpoints.tablet}) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${breakpoints.desktop}) {
    width: 900px;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 1100px;
  }
`;

export const Figure = styled.figure`
  width: 300px;
  margin-bottom: 48px;

  @media (${breakpoints.mobileLarge}) {
    width: 340px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    height: 350px;
    width: 350px;
    margin-bottom: 0;
  }

  @media (${breakpoints.desktop}) {
    height: 400px;
    width: 400px;
  }

  @media (${breakpoints.desktopLarge}) {
    height: 450px;
    width: 450px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  width: 300px;

  @media (${breakpoints.tabletSmall}) {
    width: 340px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    width: 350px;
  }

  @media (${breakpoints.desktop}) {
    width: 400px;
    height: 400px;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 450px;
    height: 450px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 2rem;
  color: ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: ${colors.textSecondary};

  @media (${breakpoints.tablet}) {
    font-size: 2.4rem;
  }
`;

export const Price = styled.p`
  font-size: 1.6rem;
  color: ${colors.textSecondary};

  @media (${breakpoints.tablet}) {
    font-size: 2.4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;

  @media (${breakpoints.tabletSmall}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
