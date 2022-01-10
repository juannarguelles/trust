import React from 'react';
import { Section, DivContainer, 
Title, Linkes, LinkesOne, LinkesTwo,
Div1, Div2, Div4, Button, Image, Image1 } 
from './Section1Style';
import img from '../../../../images/home/MaskGroup.jpg';
import img1 from '../../../../images/home/Group-1374.png';

const Section1 = () => {
  return (
    <>
        <Section>
            <DivContainer>
                <Title>¿Cómo obtengo <LinkesTwo href="https://www.trustfund.com.ar/garantia/">mi garantía?</LinkesTwo></Title>
                <Div1>
                    Es muy simple, realizá tu <Linkes href ="https://www.trustfund.com.ar/formulario/">Solicitud de Garantía. </Linkes>
                    Obtendrás tu respuesta en 24hs. Tanto la solicitud como su evaluación 
                    son completamente gratuitas, únicamente abonarás la garantía 
                    en caso de utilizarla.
                    
                    <Button>
                            <LinkesOne href ="https://www.trustfund.com.ar/garantia/" role="button">
                                SOLICITAR GARANTÍA
                            </LinkesOne> 
                    </Button>
                </Div1>
                <Div2>
                    <Image src={img} alt=''/>
                </Div2>
                <Div4>
                    <Image1 src={img1} alt=''/>
                </Div4>
            </DivContainer>
        </Section>
   </>
  );
};

export default Section1;