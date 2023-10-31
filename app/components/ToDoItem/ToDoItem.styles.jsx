import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 1rem;
    align-items: center;
  }
`;

export const ItemTextContainer = styled.p`
  display: flex;
  flex: 1;
  font-size: 1.25rem;
  margin: 0;
`;

export const ButtionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
