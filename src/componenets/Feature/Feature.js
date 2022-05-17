import React from "react";
import {
  FeatureContainer,
  IconContainer,
  Title,
  Subtitle,
} from "./FeatureStyle";

const Feature = ({ icon, title, subtitle }) => {
  return (
    <FeatureContainer>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </FeatureContainer>
  );
};

export default Feature;
