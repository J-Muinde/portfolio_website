import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:070-637-5537">0706375537</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Maiil</LinkTitle>
          <LinkItem href="mailto:muindejoshua8@gmail.com">muindejoshua8@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>From problems to peace.I work that magic</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com.com">
        <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
