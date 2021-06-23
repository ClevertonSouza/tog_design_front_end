import React from "react";
import { FaShoppingBag } from 'react-icons/fa'

import Card from "../../components/Card";
import firstImage from '../../assets/Main/trends-image.png';
import { ButtonBag, Header, HeaderText, ButtonSignIn, HeaderContent, PageContent, Image, CardText } from "./styles";

const Main: React.FC = () => {

    return (
        <>
            <Header>
                <HeaderText>Tog.design</HeaderText>

                <HeaderContent>
                    <ButtonBag icon={FaShoppingBag} />
                    <ButtonSignIn>
                        Sign In
                    </ButtonSignIn>
                </HeaderContent>
            </Header>

            <PageContent>
                <Card>
                    <Image image={firstImage} />
                    <CardText>What was the trend in 2020 and you didn’t use it</CardText>
                </Card>
            </PageContent>
        </>
    );
}

export default Main;