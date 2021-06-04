import React from 'react';
import styles from './Formulario.module.css';
import useSelect  from "../hooks/useSelect";

const Formulario = ({guardarCategoria}) => {

    //opciones
    const Opciones = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertaiment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deporte'},
        {value:'technology', label:'Tecnologia'},
    ]

    //Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general',Opciones);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                   
                   <SelectNoticias></SelectNoticias>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        >
                        </input>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;