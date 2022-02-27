import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px;
  padding: 0 1vw;
  h1 {
    text-align: center;
    color: green;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 20px;
`;
