import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.header`
  /* border-bottom: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: center;

  /* style={{position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0'}} */

position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10000;

margin-bottom: 10px;
  
  width: 100vw;
  height: 60px;
  /* margin-bottom: 30px; */
  padding: 0px;
  
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

  /* background-color: black; */
`

export const StyledLink = styled(NavLink)`
  color: #EBD8FF;
  text-decoration: none;
  margin-left: 40px;

  &.active {
    color: #5CD3A8;
  }
`;