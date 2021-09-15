import express, { Response, Request } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();
const server = express();

// Template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Pasta de arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')))

// Rotas
// Pagina Principal
server.use(mainRoutes);
// Sem pagina criada
server.use((req: Request, res: Response) => {
    res.send('Pagina não encontrada!')
});

// Conectar o servidor
console.log(`Servidor rodando na porta ${process.env.PORTA}`);
server.listen(process.env.PORTA)