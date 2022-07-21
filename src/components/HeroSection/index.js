import React from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted loop src={Video} type="video.mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking made Easy</HeroH1>
        <HeroP>Sign Up for a new Acoount today!</HeroP>
        <HeroBtnWrapper>
          <Button primary="true" dark="true" to="signup">
            Get Started
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
