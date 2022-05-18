import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const Section = styled.section`
  width: 100%;
  padding: 64px 10px;

  @media (${breakpoints.tabletMedium}) {
    padding: 80px 24px;
  }

  @media (${breakpoints.tablet}) {
    padding: 96px 24px;
  }

  @media (${breakpoints.destkop}) {
    padding: 128px 0px;
    display: grid;
    place-items: center;
  }

  ${(props) =>
    props.isAfterSection &&
    `
    padding: 0px 10px 64px 10px;

    @media (${breakpoints.tabletMedium}) {
    padding: 0px 24px 80px 24px;
  }

    @media (${breakpoints.tablet}) {
    padding: 0px 24px 96px 24px;
  }
  
    @media (${breakpoints.destkop}) {
      padding: 0px;
      padding-bottom: 64px;
      display: grid;
      place-items: center;
    
  }

`}

  ${(props) =>
    props.isFooter &&
    `
    padding: 32px 10px;

   background-color:  ${colors.primary};

   @media (${breakpoints.tabletMedium}) {
    padding: 40px 24px;
  }

   @media (${breakpoints.tablet}) {
    padding: 48px 24px;
  }

   @media(${breakpoints.destkop}) {
      padding: 64px 0px;
      display: grid;
      place-items: center;
   }

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

  ${(props) =>
    props.isAfterSection &&
    `
    `}

  /* width: 1000px; */
  ${(props) =>
    props.isFooter &&
    `
   
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

  @media (${breakpoints.tablet}) {
    font-size: 30px;
    margin-bottom: 80px;
  }

  &::after,
  ::before {
    content: "";
    width: 50px;
    /* width: 200px; */
    height: 1px;
    background-color: ${colors.tertiary};
    margin-left: 10px;
    margin-right: 10px;

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
