import styled from "styled-components";

export const FeatureContainer = styled.div`
  /* width: 250px; */
  transition: all 0.3s ease-in-out;
  &:hover {
    svg {
      color: #f0fdf9;
    }

    span {
      background-color: #087f5b;
    }
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 50%;
  background-color: #f0fdf9;
  margin-bottom: 24px;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 18px;
  color: #343a40;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #495057;
  line-height: 1.6;
`;
