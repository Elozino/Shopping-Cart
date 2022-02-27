import React from "react";

//Components
import CartItem from "./CartItem";

//Styles
import { Wrapper } from "./Cart.styles";

//Types
import { CartItemType } from "../../constants/types";
type Props = {
  cartItems: CartItemType[];
  addToCart: (cliskedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: Props): JSX.Element {
  const calcTotal = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <h3>No item found...</h3>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: $ {calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}

export default Cart;
