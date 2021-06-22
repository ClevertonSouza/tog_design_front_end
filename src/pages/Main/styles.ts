import styled from 'styled-components';
import Button from '../../components/Button';

export const Header = styled.div`
    align-items: center;
    justify-content: space-between;

    display: flex;
    margin-top: 48px;
    margin-left: 150px;
    margin-right: 150px;
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
`;

export const HeaderContent = styled.div`
    align-items: center;
    justify-content: center;
`;