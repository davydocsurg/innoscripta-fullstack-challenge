import styled, { keyframes } from "styled-components";

const slideFromBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);
}

to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const CustomContainer = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;

    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    animation: ${slideFromBottom} 1s;

    @media screen and (max-width: 600px) {
        img {
            width: 98vw;
            margin-left: 1vw;
        }
    }

    @media screen and (min-width: 900px) {
        width: 50vw;
    }
`;

export const CardContainer = styled.div`
    padding: 0 20px 0 20px;
`;
