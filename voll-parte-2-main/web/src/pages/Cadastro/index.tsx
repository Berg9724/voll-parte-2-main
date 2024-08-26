import styled from "styled-components";
import Logo from "../../components/Logo/Logo.png";
import { StepLabel, Stepper, Step } from "@mui/material";
import { useState } from "react";
import { CampoDigitacao } from "../../components/CampoDigitacao";
import Botao from "../../components/Botao";

const Imagem = styled.img`
  padding: 2em 0;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const FormularioEstilizado = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between
`;

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senhaVerificada, setSenhaVerificada] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [estado, setEstado] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    if (etapaAtiva === 0) {
      // Lógica de validação da primeira etapa
      if (!nome || !cnpj || !email || !senha || senha !== senhaVerificada) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
    } else {
      // Lógica de validação da segunda etapa
      if (!telefone || !cep || !rua || !numero || !estado) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
      // Lógica de cadastro final (chamar API, etc.)
      alert("Cadastro realizado com sucesso!");
    }

    // Avança para a próxima etapa
    setEtapaAtiva((prevEtapa) => prevEtapa + 1);
  };

  return (
    <div>
      <Imagem src={Logo} alt="Logo da Voll" />
      <Stepper activeStep={etapaAtiva}>
        <Step>
          <StepLabel>Dados Básicos</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Técnicos</StepLabel>
        </Step>
      </Stepper>

      {etapaAtiva === 0 ? (
        <Container>
          <Titulo>Primeiro, alguns dados básicos:</Titulo>
          <FormularioEstilizado onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="text"
              label="Nome"
              valor={nome}
              placeholder="Insira seu nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <CampoDigitacao
              tipo="text"
              label="CNPJ"
              valor={cnpj}
              placeholder="Insira seu cnpj"
              onChange={(e) => setCnpj(e.target.value)}
            />
            <CampoDigitacao
              tipo="email"
              label="Email"
              valor={email}
              placeholder="Insira o endereço de e-mail para login"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CampoDigitacao
              tipo="password"
              label="Senha"
              valor={senha}
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <CampoDigitacao
              tipo="password"
              label="Confirme a senha"
              valor={senhaVerificada}
              placeholder="Confirme sua senha"
              onChange={(e) => setSenhaVerificada(e.target.value)}
            />
            <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
          </FormularioEstilizado>
        </Container>
      ) : (
        <>
          <Titulo>Agora, os dados técnicos:</Titulo>
          <FormularioEstilizado onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="tel"
              label="Telefone"
              valor={telefone}
              placeholder="(DDD) XXXXX-XXXX"
              onChange={(e) => setTelefone(e.target.value)}
            />
            <CampoDigitacao
              tipo="number"
              label="CEP"
              valor={cep}
              placeholder="Insira o CEP"
              onChange={(e) => setCep(e.target.value)}
            />
            <CampoDigitacao
              tipo="text"
              label="Rua"
              valor={rua}
              placeholder="Rua"
              onChange={(e) => setRua(e.target.value)}
            />
            <Container>
              <CampoDigitacao
                tipo="number"
                valor={numero}
                placeholder="Número"
                onChange={(e) => setNumero(e.target.value)}
              />
              <CampoDigitacao
                tipo="text"
                valor={complemento}
                placeholder="Complemento"
                onChange={(e) => setComplemento(e.target.value)}
              />
              <CampoDigitacao
                tipo="text"
                valor={estado}
                placeholder="Estado"
                onChange={(e) => setEstado(e.target.value)}
              />
            </Container>
            <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
          </FormularioEstilizado>
        </>
      )}
    </div>
  );
}
