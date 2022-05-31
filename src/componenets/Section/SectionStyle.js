import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const Section = styled.section`
  width: 100%;
  padding: 32px 10px;

  @media (${breakpoints.tabletMedium}) {
    padding: 40px 24px;
  }

  @media (${breakpoints.tablet}) {
    padding: 48px 24px;
  }

  @media (${breakpoints.destkop}) {
    padding: 64px 0px;
    display: grid;
    place-items: center;
  }

  ${(props) =>
    props.isFooter &&
    `
   background-color:  ${colors.primary};
`}
`;

export const SectionInner = styled.div`
  width: 100%;

  @media (${breakpoints.destkop}) {
    width: 1000px;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 1260px;
  }
`;

export const TitleContainer = styled.div`
  ${(props) =>
    props.isCart &&
    `
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 64px;

   @media (${breakpoints.tablet}) {
    margin-bottom: 80px;
  }
`}
`;

export const Title = styled.h2`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-bottom: 64px;

  ${(props) =>
    props.isCart &&
    `
   margin-bottom: 0;
`}

  @media (${breakpoints.tablet}) {
    font-size: 30px;
    margin-bottom: 80px;

    ${(props) =>
      props.isCart &&
      `
   margin-bottom: 0;
`}
  }

  &::after,
  ::before {
    content: "";
    width: 50px;
    height: 1px;
    background-color: ${colors.tertiary};
    margin-left: 10px;
    margin-right: 10px;

    ${(props) =>
      props.isCart &&
      `
   display: none;
`}

    @media (${breakpoints.tabletMedium}) {
      width: 100px;
    }

    @media (${breakpoints.tablet}) {
      width: 150px;
    }
  }
`;

export const SmallLink = styled(Link)`
  padding-top: 48px;

  font-size: 18px;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: under;
  color: ${colors.primary};
  transition: all 0.3s ease-in;

  @media (${breakpoints.tabletMedium}) {
    padding-top: 64px;
  }

  &:hover {
    font-weight: 500;
  }
`;
