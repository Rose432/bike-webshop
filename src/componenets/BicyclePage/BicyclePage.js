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
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";

const BicyclePage = ({
  imgSrc,
  bikeTitle,
  bikeDescription,
  bikePrice,
  bicycleId,
}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

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
        <Price>Price: € {bikePrice}</Price>
        <ButtonContainer>
          <Button isFixed onClick={() => navigate(-1)}>
            Return
          </Button>
          <Button
            isFixed
            isOutline
            onClick={() =>
              dispatch(
                addItemToCart({
                  bicycleId,
                  quantity: 1,
                  imgSrc,
                  bikeTitle,
                  bikePrice,
                })
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
