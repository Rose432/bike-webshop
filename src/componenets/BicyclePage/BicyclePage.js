import React from "react";
import {
  Container,
  Figure,
  Img,
  Content,
  Flex,
  Name,
  Description,
  Price,
} from "./BicyclePageStyle";
import { Button } from "../../lib/style/generalStyle";
import { useNavigate } from "react-router-dom";

const BicyclePage = ({ imgSrc, bikeTitle, bikeDescription, bikePrice }) => {
  let navigate = useNavigate();

  return (
    <Container>
      <Figure>
        <Img src={imgSrc} alt={bikeDescription} />
      </Figure>
      <Content>
        <Flex>
          <Name>{bikeTitle}</Name>
          <Button isShop onClick={() => navigate(-1)} isBack>
            Back
          </Button>
        </Flex>
        <Description dangerouslySetInnerHTML={{ __html: bikeDescription }} />
        <Price>Price: {bikePrice}</Price>
        <Button isShop>Add to Cart</Button>
      </Content>
    </Container>
  );
};

export default BicyclePage;
