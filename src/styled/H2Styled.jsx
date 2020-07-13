import React from 'react';
import styled from 'styled-components';


const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: #C2185B;
`;


//estamos diciendo que cuando llamemos a esta funcion automaticamente va a retornar 
//StyledH2(elemento) con la propiedad name
const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>
export default H2Styled; 