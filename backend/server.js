import express from 'express';
import cors from 'cors';
import axios from 'axios';

const servidor = express()
const port = 8080

servidor.use(express.json())
servidor.use(cors())
servidor.use(axios())

servidor.get('/cards', (req, res) => {
    let cards = [
        {
            titulo: 'Componentes',
            assuntos: '- Objetos e Listas de Objetos',
            data: '01/jan',
            status: 'Em andamento',
            entregaTrab: true
        },
        {
            titulo: 'Componentes',
            assuntos: '- Objetos e Listas de Objetos',
            data: '01/jan',
            status: 'Completo',
            entregaTrab: true
        }
    ]

    res.send(cards)
})

servidor.listen(port, () => console.log(`API ouvindo na porta ${port}`));