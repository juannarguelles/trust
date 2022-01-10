import styled from 'styled-components';

export const HeroHome = styled.section`
    background-image: url("https://www.trustfund.com.ar/wp-content/uploads/2021/06/Group-1373-scaled.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`; 
 
export const Container = styled.div` 
   max-width: 1400px;
   min-height: 800px;
   display: flex;
   margin-right: auto;
   margin-left: auto;
   position: relative;
   margin-top: -130px;
   align-items: center;
   flex-wrap: wrap;
   align-content: center;
`;
  
export const Image = styled.img` 
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    background-position: center center;
`;
  
export const ContainerTitle = styled.div` 
    position: relative;
    width: 100%;
`;

export const ContainerSubTitle = styled.div` 
    position: relative;
    width: 100%;
`;

export const Title = styled.h2` 
    position: relative;
    color: white;
    font-size: 65px;
    padding: 15px;
    line-height: 1.1em;
`;

export const SubTitle = styled.h3` 
    position: relative;
    color: white;
    font-size: 1.5rem;
    padding: 15px;
    line-height: 1.5em;
`;