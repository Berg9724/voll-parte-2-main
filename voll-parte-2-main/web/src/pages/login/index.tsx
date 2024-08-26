import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {CampoDigitacao} from "../../components/CampoDigitacao";
import Logo from '../../components/Logo/Logo.png';
import Botao from '../../components/Botao';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  min-height: 100vh; 
  padding: 10em; 
`;

const ImagemEstilizada = styled.img`
  padding: 2em 0;
  display: block;
  margin: 0 auto; 
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
  text-align: center;
`;

const FormularioEstilizado = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 1em 0; 
`;

const ParagrafoCadastro = styled.p`
  color: var(--cinza);
  text-align: center; /* Centraliza o parágrafo */
`;

const LinkCustomizado = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
`;

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
      <Container>
        <ImagemEstilizada src={Logo} alt="Logo" /> {/* Certifique-se de que a imagem é referenciada corretamente */}
        <Titulo>Faça login em sua conta</Titulo>
        <FormularioEstilizado>
          <CampoDigitacao 
            valor={email}
            tipo="text"
            placeholder="Insira seu endereço de email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <CampoDigitacao 
            valor={senha}
            tipo="password"
            placeholder="Insira a sua senha"
            onChange={(e) => setEmail(e.target.value)}
            label="Senha"
          />
          <Botao type="submit">Entrar</Botao>
        </FormularioEstilizado>
        <p style={{ textAlign: 'center' }}>Esqueceu sua senha?</p>
        <ParagrafoCadastro>
          Ainda não tem conta? 
          <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado>
        </ParagrafoCadastro>
      </Container>
    );
}