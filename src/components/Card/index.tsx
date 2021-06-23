import React from "react";
import { Content } from "./styles";

const Card: React.FC = ({ children }) => {

    return (
        <Content>
            {children}
        </Content>
    )
}

export default Card;