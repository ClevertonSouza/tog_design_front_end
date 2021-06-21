import React from "react";
import { ButtonBag, Header, HeaderText, ButtonSignIn, HeaderButtons } from "./styles";

import { FaShoppingBag } from 'react-icons/fa'

const Main: React.FC = () => {

    return (
        <Header>
            <HeaderText>Tog.design</HeaderText>

            <HeaderButtons>
                <ButtonBag icon={FaShoppingBag} />
                <ButtonSignIn>
                    Sign In
                </ButtonSignIn>
            </HeaderButtons>
        </Header>
    );
}

export default Main;