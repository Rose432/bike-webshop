import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const Section = styled.section`
  padding: 64px 10px;
  /* padding: 128px calc((100% - 960px) / 2); */

  @media (${breakpoints.tabletMedium}) {
    padding: 80px 24px;
  }

  @media (${breakpoints.destkopLarge}) {
    padding: 128px calc((100% - 1260px) / 2);
  }

  ${(props) =>
    props.isAfterSection &&
    `
    padding: 0px 10px 64px 10px;

    @media (${breakpoints.tabletMedium}) {
    padding: 0px 24px 80px 24px;
  }

    @media(${breakpoints.destkopLarge}) {
     padding: 0px  calc((100% - 1000px) / 2) 128px  calc((100% - 1000px) / 2);

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

   @media(${breakpoints.destkop}) {
     padding: 64px  calc((100% - 960px) / 2);
     }

   @media(${breakpoints.destkopLarge}) {
     padding: 64px  calc((100% - 1260px) / 2);

   }

`}
`;

export const SectionInner = styled.div`
  width: 100%;

  ${(props) =>
    props.isAfterSection &&
    `
    `}

  /* width: 1000px; */
  ${(props) =>
    props.isFooter &&
    `
    width: 100%;
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

  /* @media (${breakpoints.tabletMedium}) {
    font-size: 24px;
  } */

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
  }
`;

export const SmallLink = styled(Link)`
  /* padding-top: 64px; */
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
