import React from 'react';
import { Section, DivContainer,
Text, Text1, Section1, Section2, Section3,
SectionContainer, SectionDiv, Button, LinkesOne } 
from './Section4Style';
import Img from '../../../../images/home/MiguezPropiedades-1.png';

const Section4 = () => {
    return(
        <>
            <Section>
                <DivContainer>
                        <Text>
                            Inmobiliarias adheridas
                        </Text>
                        <Text1>
                            al sistema de garantías Trust Fund
                        </Text1>
                        <Section1>
                            <SectionContainer>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                            </SectionContainer>
                        </Section1>
                        <Section2>
                            <SectionContainer>
                            <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                                <SectionDiv>
                                    <a href="https://miguezpropiedades.com.ar/">
                                        <img src={Img}
                                        alt="" width="200px" height="200px"/>
                                    </a>
                                </SectionDiv>
                            </SectionContainer>
                        </Section2>
                        <Section3>
                            <Button>
                                <LinkesOne href ="https://www.trustfund.com.ar/inmobiliarias-adheridas/" role="button">
                                    VER MAS
                                </LinkesOne>
                            </Button>
                        </Section3>
                </DivContainer>
            </Section>
        </>
    )
};

export default Section4;