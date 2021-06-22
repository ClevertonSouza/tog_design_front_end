import React from "react";
import { ButtonBag, Header, HeaderText, ButtonSignIn, HeaderContent } from "./styles";

import { FaShoppingBag } from 'react-icons/fa'

const Main: React.FC = () => {

    return (
        <Header>
            <HeaderText>Tog.design</HeaderText>

            <HeaderContent>
                <ButtonBag icon={FaShoppingBag} />
                <ButtonSignIn>
                    Sign In
                </ButtonSignIn>
            </HeaderContent>
        </Header>
    );
}

export default Main;