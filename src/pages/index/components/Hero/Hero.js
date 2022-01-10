import React from 'react';
import { HeroHome, Container, ContainerTitle, ContainerSubTitle, SubTitle, Title } from './HeroStyle';

const Hero = () => {
  return (
    <HeroHome>
      <Container>
        <ContainerTitle>
          <Title>Garantizamos 
            <br/> 
            tu alquiler</Title>
        </ContainerTitle>
        <ContainerSubTitle>
          <SubTitle>La Garantía que necesitás,
            <br/>
            para vivir donde querés</SubTitle>
        </ContainerSubTitle>
      </Container>
    </HeroHome> 
  );
};

export default Hero;