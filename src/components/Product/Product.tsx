import { Button } from "@material-ui/core";
import React from "react";

//Types
import { CartItemType } from "../../constants/types";

//Styles
import { Wrapper } from "./Product.styles";

//Props Types
export type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

function Product({ item, handleAddToCart }: Props): JSX.Element {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
}

export default Product;
