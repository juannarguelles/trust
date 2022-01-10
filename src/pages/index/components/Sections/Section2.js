import React from 'react';
import { Section, DivContainer, 
Paragraph, Linkes, Image, ImgContainer,
Div1, Div2, Div3,
SubDiv, SubDiv1
} from './Section2Style';
import img from '../../../../images/home/Group-1.png';
import img1 from '../../../../images/home/Group-2.png';
import img2 from '../../../../images/home/Group-3.png';

const Section2 = () =>{
    return (
        <>
            <Section>
                <DivContainer>
                    <Paragraph>En 3 simples pasos</Paragraph>
                    <ImgContainer>
                        <Div1>
                            <Image src={img} alt=''/>
                            <SubDiv>01</SubDiv>
                            <SubDiv1>Completá el <Linkes href='https://www.trustfund.com.ar/formulario/'>formulario </Linkes> 
                            de solicitud de garantía en nuestra web</SubDiv1>
                        </Div1>
                        <Div2>
                            <Image src={img1} alt=''/>
                            <SubDiv>02</SubDiv>
                            <SubDiv1>Esperá que nos contactemos con vos en las siguientes
                                    24 horas hábiles</SubDiv1>
                        </Div2>
                        <Div3>
                            <Image src={img2} alt=''/>
                            <SubDiv>03</SubDiv>
                            <SubDiv1>Entregá la documentación solicitada y, ¡listo! 
                                     Ya tenés tu Garantía Trust Fund</SubDiv1>
                        </Div3>
                    </ImgContainer>
                </DivContainer>    
            </Section>
        </>
    )
};

export default Section2;