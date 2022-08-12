import React, { useContext } from "react";
import {
  Container,
  Figure,
  Img,
  Content,
  Flex,
  Name,
  Description,
  Price,
  ButtonContainer,
} from "./BicyclePageStyle";
import { Button } from "../../lib/style/generalStyle";
import { useNavigate } from "react-router-dom";
import { FasterCartContext } from "../../context/FasterCartContext";

const BicyclePage = ({
  imgSrc,
  bikeTitle,
  bikeDescription,
  bikePrice,
  bicycleId,
}) => {
  const { fasterCart, handleAddItemsToCart } = useContext(FasterCartContext);
  let navigate = useNavigate();

  return (
    <Container>
      <Figure>
        <Img src={imgSrc} alt={bikeDescription} />
      </Figure>
      <Content>
        <Flex>
          <Name>{bikeTitle}</Name>
        </Flex>
        <Description dangerouslySetInnerHTML={{ __html: bikeDescription }} />
        <Price>Price: {bikePrice}</Price>
        <ButtonContainer>
          <Button isFixed onClick={() => navigate(-1)}>
            Return
          </Button>
          <Button
            isFixed
            isOutline
            onClick={() =>
              handleAddItemsToCart(
                bicycleId,
                1,
                imgSrc,
                bikeTitle,
                bikePrice,
                fasterCart
              )
            }
          >
            Add to Cart
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default BicyclePage;
