import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { setupSwagger } from './utils/swagger';

//Routes
import healthRoute from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('combined', { stream: { write: (message) => console.log(message.trim()) } }));

// Swagger
setupSwagger(app);

// Rotas
app.use('/api', healthRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
