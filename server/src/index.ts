import express, { Request, Response } from "express";
import cors from 'cors';
import router from "./routes/products";
import productRouter from "./routes/products";
import reviewRouter from "./routes/reviews";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(reviewRouter);
app.use(productRouter);


app.listen(port, () => {
  console.log(`Example app listening port http://localhost:${port}`);
});
