import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  text-align: center;
  border-radius: 50px;
  width: 100%;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  outline: none;
  border: none;
  background-color: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  color: ${({ dark }) => (dark ? 'black' : 'white')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
  }
`
