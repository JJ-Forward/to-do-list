import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: scroll;
  width: 90%;
  height: 500px;
  padding: 1rem;
  background-color: var(--white);
  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
