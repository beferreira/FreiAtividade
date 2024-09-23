import Cabecalho from '../../components/Cabecalho';
import './styles.scss';
import axios from 'axios';

import { useState } from 'react';


export default function App() {
    let corPrimaria = '#DCA3E5'
    let corSegundaria = '#EDE2FB'
    
        const [cards, setCards] = useState([])

        async function listarCards() {
            try {
                const dados = await axios.get('http://localhost:8080/cards');
                setCards (dados.data);
            } catch (error) {
                alert(error)
            }
        }

    return (
        <div className='app-container'>
            <Cabecalho />
                <button onClick={listarCards}>Listar</button>

            <div className='cards'>
                <div className='card' style={{ backgroundColor: corSegundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>Componentes</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>
                            - Objetos e Listas de Objetos<br />
                            - Componentes
                        </pre>
                    </div>
                    <p className='tag'>26/agosto</p>
                </div>
            </div>
        </div>
    );
}

