import {request, response, Router} from 'express';

const router = Router();

router.get('/health', (request, response) => {
  response.json({ sucess: true, message: 'API está rodando', timestamp: new Date().toISOString(), uptime: process.uptime(), versão: '1.0.0' });
});

export default router;