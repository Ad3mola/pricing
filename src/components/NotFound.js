import React from "react";
import styled from "styled-components";

const Div = styled.div`
height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
.error{
    font-family: joker, sans-serif;
}
h1{
    font-size: 20rem;
}
button{
        background-color: purple;
        color: white;
        border:0;
        }

        @media (max-width: 767.98px) {
            h1{
    font-size: 5rem;
}
h2, h4{
    font-size: 2rem;
}
        }
`;

const NotFound = () => {
  return (
    <Div className="container ">
      <h1
        className="display-1 font-weight-bold error text-center"
        style={{ color: "purple" }}
      >
        404
      </h1>
      <h4
        className="font-weight-bold display-4 text-center"
        style={{ color: "#F17135" }}
      >
        Wrong Link
      </h4>
    </Div>
  );
};

export default NotFound;
