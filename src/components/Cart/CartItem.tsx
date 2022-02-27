import React from "react";

//Styles
import { Wrapper } from "./CartItem.styles";

//Types
import { CartItemType } from "../../constants/types";
import { Button } from "@material-ui/core";
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

function CartItem({ item, addToCart, removeFromCart }: Props): JSX.Element {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price: $ {item.price}</p>
          <p>Total: $ {(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
}

export default CartItem;
