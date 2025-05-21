import express, { Request, Response } from "express";
import router from "./routes/products";
import productRouter from "./routes/products";
import reviewRouter from "./routes/reviews";
const app = express();
const port = 3000;
app.use(productRouter);
app.use(reviewRouter);
app.listen(port, () => {
  console.log(`Example app listening port http://localhost:${port}`);
});
