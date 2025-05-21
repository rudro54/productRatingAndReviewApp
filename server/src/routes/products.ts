import express, { NextFunction } from "express";
import { Request, Response } from "express";
const productRouter = express.Router();
import products from "../data/ProductData";
import { ProductController } from "./../controller/productController";

productRouter.get("/products", ProductController.getProducts);
productRouter.get("/products/search", ProductController.getProducts);
productRouter.get("/products/:id", ProductController.getProductById);


export default productRouter;
