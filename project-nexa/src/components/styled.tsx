import styled from "styled-components";
import banner from '../common/images/banner-friends.jpg';

export const Header = styled.header`
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    height: 100vh;

    & .lightness {
        background-color: rgba(102, 102, 102, 0.32);
        height: 100vh;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Title = styled.h1`
    color: white;
    text-transform: uppercase;
`;

export const SubTitle = styled(Title)`
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 400;
`;