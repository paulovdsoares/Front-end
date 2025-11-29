import styled from 'styled-components'

export const Subtitulo = styled.h4`
    text-align: ${props => props.alinhamento || 'center'};
    font-size: ${props => props.fonteTamanho || '16px'};
    font-weight: ${props => props.fontePeso || '500'};
    margin-bottom: ${props => props.MargemBotton || '40px'};
    color: ${props => props.corFonte || '#fff'};

`