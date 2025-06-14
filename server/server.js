import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import shoppingListRouter from './routes/shopping_list/routes-shopping_list.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;
app.use(cors());
app.use(express.json());

app.use('/shopping-list', shoppingListRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
