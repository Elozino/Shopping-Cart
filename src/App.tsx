import { useState } from "react";
import { useQuery } from "react-query";

//Components
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

//Components from mui
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

//Styles
import { StyledButton, Wrapper } from "./App.styles";

// Types
import { CartItemType } from "./constants/types";

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

// const getProducts = async (): Promise<CartItemType[]> => {
//   return await fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => {
//       return json;
//     });
// };

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products", //query key and it ccan be any name
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.amount, 0);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // Checkt if the item is already in cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((total, item) => {
        if (item.id === id) {
          if (item.amount === 1) return total;
          return [...total, { ...item, amount: item.amount - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops!!! Something went wrong...</div>;

  return (
    <Wrapper className="App">
      <h1>Store App</h1>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Product item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
