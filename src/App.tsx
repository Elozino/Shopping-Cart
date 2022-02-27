import { useState } from "react";
import { useQuery } from "react-query";

//COmponents
import Product from "./components/Product/Product";

//Components from mui
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

//Styles
import { Wrapper } from "./App.styles";

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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products", //query key and it ccan be any name
    getProducts
  );

  const getTotalItems = () => null;
  const handleAddTopCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops!!! Something went wrong...</div>;

  return (
    <Wrapper className="App">
      <h1>Store App</h1>
      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <Product item={item} handleAddToCart={handleAddTopCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
