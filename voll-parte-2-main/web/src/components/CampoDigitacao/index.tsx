import React from 'react';

interface CampoDigitacaoProps {
  tipo: string;
  valor: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Tipo do evento
  label?: string;
}

export const CampoDigitacao: React.FC<CampoDigitacaoProps> = ({
  tipo,
  valor,
  placeholder,
  onChange,
  label,
}) => (
  <div>
    {label && <label>{label}</label>}
    <input 
      type={tipo} 
      value={valor} 
      placeholder={placeholder} 
      onChange={onChange} 
    />
  </div>
);
