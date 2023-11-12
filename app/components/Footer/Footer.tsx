import React, { memo } from "react";
import { FooterContainer } from "./Footer.styles";
import { ChildProps } from "@/app/layout";

const Footer = ({ children }: ChildProps) => {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    );
};

export default memo(Footer);