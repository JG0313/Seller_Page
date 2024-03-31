// Navbar.styles.js
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #ffc700;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
`;