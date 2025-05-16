import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express, { json } from 'express';
import dbConnection from './db.js';
import memes from './routes/memes.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 8080;

// use JSON parsing
app.use(json());
// allow Cross Origin Resource Sharing(CORS support)
app.use(cors());

//redirect requests to '/memes' to './routes/memes' middleware
app.use('/memes', memes);

// Swagger UI setup
app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Default route
app.get('/', (req, res) => {
	//route '/' has not been defined
	res.status('404');
});

//Start the express server and establish connection to the database
app.listen(port, () => {
	console.log(`Meme app listening at http://localhost:${port}`);
	console.log(`Swagger UI available at http://localhost:${port}/swagger-ui/`);
	dbConnection();
});
