import logo from "../../imagens/logo.svg";
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImgContainer = styled.img`
margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImgContainer src={logo} alt='logo'></LogoImgContainer>
      <p><strong>Paulo</strong>store</p>
    </LogoContainer>
  );
}

export default Logo;
