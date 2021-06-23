import styled from 'styled-components';
import Button from '../../components/Button';

interface ImageProps {
    image: string;
};

export const Header = styled.div`
    align-items: center;
    justify-content: space-between;

    display: flex;
    margin: 48px 150px;
`;

export const HeaderText = styled.h1`

`;

export const ButtonBag = styled(Button)`
    top: 27px;
    left: 1106px;
    margin-right: 48px;
    width: 48px;
    height: 48px;
    background: #A9A7B1 0% 0% no-repeat padding-box;
    opacity: 0.5;

    border-radius: 100%; 
    color: #fff;
    border: none;

    &:active {
        opacity: 0.4;
    }
`;

export const ButtonSignIn = styled(Button)`
    border: none;
    background: #6356A5 0% 0% no-repeat padding-box;
    color: #fff;

    border-radius: 12px;
    opacity: 1; 

    top: 32px;
    left: 1178px;
    width: 86px;
    height: 38px;

    &:active {
        opacity: 0.9;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
`;

export const PageContent = styled.main`
    margin-left: 150px;
`;

export const Image = styled.div`
    width: 100%;
    height: 239px;
    background: transparent url(${(props: ImageProps) => props.image}) 0% 0% no-repeat padding-box;
`;

export const CardText = styled.span`
    top: 397px;
    left: 166px;
    width: 380px;
    height: 74px;
    text-align: left;
    font: normal normal medium 30px/37px Helvetica Neue;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
`;