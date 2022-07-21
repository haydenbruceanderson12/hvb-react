import React from 'react'
import Icon1 from '../../images/png-1.png'
import Icon2 from '../../images/png-2.png'
import Icon3 from '../../images/png-3.png'
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Reduce your Risk</ServicesH2>
            <ServicesP>
              We Help you make more jhcaiush h uiash huiash i asn iasniasnuina
              asbuisa
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              We Help you make more jhcaiush h uiash huiash i asn iasniasnuina
              asbuisa
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              We Help you make more jhcaiush h uiash huiash i asn iasniasnuina
              asbuisa
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
