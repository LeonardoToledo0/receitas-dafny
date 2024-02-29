import styled from 'styled-components';
import { NavLink } from "react-router-dom";



const corPrincipal = '#f3fde8';
const corPrimaria = '#B784B7'
const corTerciaria = '#a8df8e';

export const NavHeader = styled.header`
width: 100%;
background: ${corPrincipal};
box-shadow: 4px 0px 7px ${corPrimaria};
position: fixed;

`

export const NavHeaderDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: ${corPrincipal};
`;

export const NavHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const NavImageBox = styled.div`
  width: 70px;
  height: 100%;
  margin: 5px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid ${corPrimaria};
`
export const NavImage = styled.img`
width: 100%;
transition: all.5s;
 &:hover{
    transform: scale(1.4)rotate(12deg);

  }
`;

export const NavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 100px;

`;
export const NavLogin = styled(NavLink)`
font-family: "Josefin Sans", sans-serif;
text-decoration: none;
font-size: 1.3rem;
color:${corPrincipal};
font-weight: 700;
padding: 8px 12px;
border-radius: 8px;
background: ${corTerciaria};

&:hover{
    background-color: ${corPrimaria};
    
}
`

export const NavLinks = styled(NavLink)`
font-family: "Josefin Sans", sans-serif;
text-decoration: none;
font-size: 1.3rem;
color:${corPrimaria};
font-weight: 700;
&:hover{
    color: ${corTerciaria};
 
}

`;