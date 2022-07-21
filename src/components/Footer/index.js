import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/about">How It Works</FooterLink>
                <FooterLink to="/about">Testimonials</FooterLink>
                <FooterLink to="/about">Careers</FooterLink>
                <FooterLink to="/about">Terms of Service</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/about">How It Works</FooterLink>
                <FooterLink to="/about">Testimonials</FooterLink>
                <FooterLink to="/about">Careers</FooterLink>
                <FooterLink to="/about">Terms of Service</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle>Who We Are</FooterLinkTitle>
                <FooterLink to="/about">How It Works</FooterLink>
                <FooterLink to="/about">Testimonials</FooterLink>
                <FooterLink to="/about">Careers</FooterLink>
                <FooterLink to="/about">Terms of Service</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle>What We Do</FooterLinkTitle>
                <FooterLink to="/about">How It Works</FooterLink>
                <FooterLink to="/about">Testimonials</FooterLink>
                <FooterLink to="/about">Careers</FooterLink>
                <FooterLink to="/about">Terms of Service</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">HVB</SocialLogo>
              <WebsiteRights>
                HVB <span>&copy;</span> {new Date().getFullYear()} All Rights
                Reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/hayden-anderson-047a80208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAsBvj5TAT%2FS3HMnWYajL0Q%3D%3D"
                  target="_blank"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/haydenbruceanderson12"
                  target="_blank"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
