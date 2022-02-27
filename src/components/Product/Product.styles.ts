import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 1px solid gray;
  height: 100%;

  button {
    border-radius: 0 0 10px 10px;
    background-color: grey;
  }
  img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    text-align: center;
    padding-top: 1.5rem;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;
