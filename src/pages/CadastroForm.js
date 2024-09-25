import React, { useState } from 'react';
import './CadastroForm.css';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmSenha: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Função para lidar com alterações nos campos de input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Formulário enviado com sucesso:', formData);
      // Aqui você pode enviar os dados para o servidor, por exemplo.
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  // Função de validação simples
  const validate = (data) => {
    const errors = {};
    if (!data.nome) errors.nome = 'Nome é obrigatório';
    if (!data.email) errors.email = 'Email é obrigatório';
    if (!data.senha) errors.senha = 'Senha é obrigatória';
    if (data.senha !== data.confirmSenha) errors.confirmSenha = 'As senhas não coincidem';
    return errors;
  };

  return (
    <div className="cadastro-form-container">
      <h2>Cadastro</h2>
      {submitted && <p className="success-message">Cadastro realizado com sucesso!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {errors.nome && <p className="error-message">{errors.nome}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          {errors.senha && <p className="error-message">{errors.senha}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmSenha">Confirmar Senha</label>
          <input
            type="password"
            name="confirmSenha"
            id="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
          />
          {errors.confirmSenha && <p className="error-message">{errors.confirmSenha}</p>}
        </div>

        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroForm;
