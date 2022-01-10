import React from 'react';
import { Section, DivContainer,
    Div1, Div2, Paragraph, Paragraph1,
    Button, LinkesOne} 
from './Section3Style';

const Section3 = () => {
    return(
        <>
            <Section>
                <DivContainer>
                    <Div1>
                        <Paragraph>Sin Garantía Propietaria, sólo con tus ingresos</Paragraph>
                        <br/>
                        <Paragraph1>Calculá el valor de nuestra Garantía.</Paragraph1>
                    </Div1>
                    <Div2>
                        <Button>
                                <LinkesOne href ="https://www.trustfund.com.ar/calculador/" role="button">
                                    CALCULAR GARANTÍA                            
                                </LinkesOne>
                        </Button>
                    </Div2>
                </DivContainer>
            </Section>
        </>
    )
};

export default Section3;