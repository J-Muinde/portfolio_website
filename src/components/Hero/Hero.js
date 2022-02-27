import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there<br/>
        Welcome
      </SectionTitle>
      <SectionText>
        What i offer to employee
      </SectionText>
      <Button onClick={() => window.open("https://google.com")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;