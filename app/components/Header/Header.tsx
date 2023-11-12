import React, { memo } from "react";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <h1>To do List</h1>
        </HeaderContainer>
    );
};

export default memo(Header);