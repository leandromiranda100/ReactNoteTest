import React, {useState} from "react"
import './App.css';
import Axios from 'axios';

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = value => {
    setValues( prevValue => ({
      ...prevValue,
      [value.target.name]: [value.target.value],
    }));
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register",{
      name : values.name,
      cost : values.cost,
      category : values.category,
    }).then((response) => { console.log(response)});
  }

  return (
    <div className="app-container">
        <div className="register--container">
          <h1 className='register--title'>Scrim shop</h1>
          <input onChange={handleChangeValues} type="text" name="name" placeholder="Nome" className="register--input" /><br/>
          <input onChange={handleChangeValues} type="text" name="cost" placeholder="Preço" className="register--input" /><br/>
          <input onChange={handleChangeValues} type="text" name="category" placeholder="Categoria" className="register--input" /><br/>
          <button onClick={() => handleClickButton()} className='register--button'>Cadastrar</button>
        </div>
    </div>
  );
}

export default App;
