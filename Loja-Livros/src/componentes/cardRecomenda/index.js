import { Titulo } from '../Titulo'
import { Subtitulo } from '../Subtitulo'
import styled from "styled-components"



const Card = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 800;
    display: block;
    text-align: center;
    width: 150px; 
`
const ImgLivro = styled.img`
    width: 150px;
`
const Descricao = styled.p`
    font-size = 30px;
    color= #000;
    font-align = center;
`

function cardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
            <div>
                <Titulo cor="#cc7504" fonte="20px" alinhamento="left">{titulo}</Titulo>
                <Subtitulo fonteTamanho="24px" corFonte="rgba(9, 3, 94, 1)" alinhamento='left'>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} />
                <Button>Saiba mais</Button>
            </div>
        </Card>

    )
}
export default cardRecomenda 