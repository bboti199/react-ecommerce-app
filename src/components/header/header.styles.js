import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  margin: 0 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.3s ease-in;
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
  }

  &.active {
    border: 1px solid black;
    color: white;
    background-color: black;
  }
`;
