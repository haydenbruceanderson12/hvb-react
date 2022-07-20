import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9328;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const ClosedIcon = styled(FaTimes)`
  color: #ffffff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6 80px);
  text-align: center;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  padding: 2rem;

  &.hover {
    color: black;
    transition: 0.2s all ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  cursor: pointer;
  padding: 16px 64px;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 16px;
  transition: 0.2s all ease-in-out;
  color: #fff;

  &.hover {
    transition: 0.2s all ease-in-out;
    background-color: #fff;
    color: #010106;
  }
`
