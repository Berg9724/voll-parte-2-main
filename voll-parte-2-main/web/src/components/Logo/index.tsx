import styled from "styled-components"
import logo from "/Logo.png"

const Imagem = styled.img`
  padding: 2em 0;
`;

function Logo() {
    return (
      <Imagem src={logo} alt="Logo" />
    );

}

export default Logo;