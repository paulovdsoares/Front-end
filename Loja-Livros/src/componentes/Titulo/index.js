import styled from "styled-components";

export const Titulo = styled.h2`
    color: ${props => props.cor || '#fff'};
    font-size: ${props => props.fonte || '36px'};
    text-align: ${props => props.alinhamento || 'center'};
    width: 100%;
`