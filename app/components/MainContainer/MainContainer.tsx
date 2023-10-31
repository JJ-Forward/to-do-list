import React from "react";
import { Container } from "./MainContainer.styles";
import { ChildProps } from "@/app/layout";

const MainContainer = ({ children }: ChildProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
