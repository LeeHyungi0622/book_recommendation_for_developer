import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`

`;

const List = styled.ul`

`;

const Menu = styled.li`
    
`;

const SLink = styled(Link)`

`;

// Header functional component 
// router의 pathname이 현재 클릭한 navigatino menu의 path와 일치한다면, 
// 해당 위치의 스타일을 구분해서 표시하도록 한다. (current 속성활용)
const Header = ({location: {pathname}}) => (
    <Container>
        <List>
            <Menu current={pathname === "/" || pathname === "/it"}>
                <SLink to="/it">Computer/Internet</SLink>
            </Menu>
            <Menu current={pathname === "/development"}>
                <SLink to="/development">Development</SLink>
            </Menu>
        </List>
    </Container>       
)

export default withRouter(Header);