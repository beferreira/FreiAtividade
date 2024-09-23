import Cabecalho from '../../components/Cabecalho';
import './styles.scss';

export default function App() {
    let corPrimaria = '#DCA3E5'
    let corSegundaria = '#EDE2FB'

    return (
        <div className='app-container'>
            <Cabecalho />

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

