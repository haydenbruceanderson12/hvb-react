import React from 'react'
import { Button } from '../ButtonElement'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
  Column2,
  TopLine,
} from './InfoElements'

function Sections({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  header,
  darkText,
  description,
  buttonLabel,
  svgimage,
  alt,
  primary,
  dark,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{header}</Heading>
              <SubTitle darkText={darkText}>{description}</SubTitle>
              <BtnWrap>
                <Button
                  to="/"
                  smooth={true}
                  spy={true}
                  exact={true}
                  offset={-80}
                  duration={500}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={svgimage} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Sections
