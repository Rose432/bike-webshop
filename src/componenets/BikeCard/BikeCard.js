import {
  BikeCard as BikeContainer,
  FigureLink,
  Figure,
  Img,
  Content,
  TitleLink,
  Title,
  Price,
} from "./BikeCardStyle";
import { Button } from "../../lib/style/generalStyle";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/cartSlice";

const BikeCard = ({
  bicycleName,
  imgSrc,
  imgAlt,
  bikeTitle,
  bikePrice,
  bicycleId,
}) => {
  const dispatch = useDispatch();

  return (
    <BikeContainer>
      <FigureLink to={`/bicycle/${bicycleName}`}>
        <Figure>
          <Img alt={imgAlt} src={imgSrc} />
        </Figure>
      </FigureLink>

      <Content>
        <TitleLink to={`/bicycle/${bicycleName}`}>
          <Title>{bikeTitle}</Title>
        </TitleLink>
        <Price>€ {bikePrice}</Price>
        <Button
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
          isShop
        >
          Add to cart
        </Button>
      </Content>
    </BikeContainer>
  );
};

export default BikeCard;
