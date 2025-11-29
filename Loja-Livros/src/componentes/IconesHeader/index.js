import perfil from '../../imagens/sacola.svg'
import sacola from '../../imagens/perfil.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`

const IconeContainer = styled.li`
     margin-right: 40px;
     width: 25px;
`

function IconesHeader() {

    const icones = [perfil, sacola]

    return (
        <IconesContainer>
            {icones.map((icone) => (
                <IconeContainer><img src={icone} alt='icone'></img></IconeContainer>
            ))}
        </IconesContainer>
    )

}
export default IconesHeader;