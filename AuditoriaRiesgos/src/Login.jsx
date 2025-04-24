import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario === 'auditor' && clave === '1234') {
      alert('Acceso concedido');
      navigate('/dashboard');
    } else {
      alert('Usuario o clave incorrectos');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login de Auditor</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      /><br />
      <button onClick={handleLogin} style={{ padding: '8px 16px' }}>
        Ingresar
      </button>
    </div>
  );
}
