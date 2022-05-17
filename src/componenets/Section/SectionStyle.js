import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 128px calc((100% - 1260px) / 2);

  ${(props) =>
    props.isAfterSection &&
    `
   padding: 0px  calc((100% - 1000px) / 2) 128px  calc((100% - 1000px) / 2);
`}

  ${(props) =>
    props.isFooter &&
    `
   background-color:  #087f5b;
   padding: 64px  calc((100% - 1260px) / 2);
  
`}
`;

export const SectionInner = styled.div`
  width: 100%;

  ${(props) =>
    props.isAfterSection &&
    `
    width: 1000px;
    `}

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
  color: #343a40;
  margin-bottom: 64px;

  &::after,
  ::before {
    content: "";
    width: 200px;
    height: 1px;
    background-color: #dee2e6;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const SmallLink = styled(Link)`
  padding-top: 64px;
  font-size: 18px;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: under;
  color: #087f5b;
  transition: all 0.3s ease-in;

  &:hover {
    font-weight: 500;
  }
`;
