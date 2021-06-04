import React, {Fragment, useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //definir la categoria y noticias
  const [categoria,guardarCategoria] = useState('');

  //Para cuando detecte un cambio
  useEffect(()=>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&
      apiKey=1c59f04d40114c2ba637d389d4452b6f`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'></Header>
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        ></Formulario>
      </div>
    </Fragment>
  );
}

export default App;
