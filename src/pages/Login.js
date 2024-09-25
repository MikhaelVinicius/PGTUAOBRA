import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Login bem-sucedido:', formData);
      
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };


  const validate = (data) => {
    const errors = {};
    if (!data.email) errors.email = 'Email é obrigatório';
    if (!data.senha) errors.senha = 'Senha é obrigatória';
    return errors;
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {submitted && <p className="success-message">Login realizado com sucesso!</p>}
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="submit-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
