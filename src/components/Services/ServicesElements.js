import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 60px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba (0, 0, 0, 0.2);

  &.hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 3rem;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
`
export const ServicesP = styled.p`
  text-align: center;
  font-size: 1rem;
`
