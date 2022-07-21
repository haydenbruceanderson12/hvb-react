import React from 'react'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/about">How It Works</FooterLink>
                <FooterLink to="/about">Testimonials</FooterLink>
                <FooterLink to="/about">Careers</FooterLink>
                <FooterLink to="/about">Terms of Service</FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
