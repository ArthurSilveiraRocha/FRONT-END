import React, { useState } from 'eact';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';

function App() {
  const [tipoForm, setTipoForm] = useState(null);

  const handleCadastreSeClick = () => {
    setTipoForm(tipoForm === 'cadastro'? 'login' : 'cadastro');
  };

  return (
    <div className="App">
      <h1>e-comércio - N2 Q8</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={handleCadastreSeClick}>
          Cadastre-se
        </button>
        <button className="btn btn-success">
          Login
        </button>
      </div>
      <div>
        {tipoForm === 'cadastro'? (
          <FormCadastro />
        ) : tipoForm === 'login'? (
          <FormLogin />
        ) : (
          <p>Selecione uma ação acima</p>
        )}
      </div>
    </div>
  );
}

export default App;