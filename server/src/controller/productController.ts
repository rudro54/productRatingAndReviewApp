import { NextFunction } from "express";
import { Request, Response } from "express";
import products from "../data/ProductData";
import Product from "../models/productModel";

export const ProductController = {
  getProducts: function (
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const query = req.query.q?.toString().trim().toLowerCase();
    if (query) {
      let result = Product.getProductByQuery(query);
      if (result.length>0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "query item not found" });
      }
    } else {
      let sorted = Product.getProductsSortedByDate();
      if(sorted){
         res.status(200).json(sorted); 
      }else{
         res.status(404).json({message:"products not found"});
      }
     
    }
  },

  getProductById: function (
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    let result = Product.getProductById(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "book not found" });
    }
  },







};
