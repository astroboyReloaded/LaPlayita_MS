import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import shoppingListRouter from './routes/shopping_list/routes-shopping_list.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://your-site-name.netlify.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy: This origin is not allowed'));
      }
    },
  }),
);
app.use(express.json());

app.use('/shopping-list', shoppingListRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
