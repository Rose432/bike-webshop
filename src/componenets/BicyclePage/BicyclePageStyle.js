import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 750px;
    margin: 0 auto;
  }

  @media (${breakpoints.destkop}) {
    width: 900px;
  }

  @media (${breakpoints.destkop}) {
    width: 1100px;
  }
`;

export const Figure = styled.figure`
  width: 300px;
  margin-bottom: 48px;

  @media (${breakpoints.tabletSmall}) {
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    height: 350px;
    width: 350px;
    margin-bottom: 0;
  }

  @media (${breakpoints.destkop}) {
    height: 400px;
    width: 400px;
  }

  @media (${breakpoints.destkopLarge}) {
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
    width: 400px;
  }

  @media (${breakpoints.tablet}) {
    width: 350px;
  }

  @media (${breakpoints.destkop}) {
    width: 400px;
    height: 400px;
  }

  @media (${breakpoints.destkop}) {
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
  font-size: 20px;
  color: ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  color: ${colors.textSecondary};

  @media (${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const Price = styled.p`
  color: ${colors.textSecondary};

  @media (${breakpoints.tablet}) {
    font-size: 24px;
  }
`;
