import express, { NextFunction } from "express";
import { Request, Response } from "express";
const reviewRouter = express.Router();
import Review from "../models/reviewModel";
import { ReviewController } from '../controller/reviewController';

reviewRouter.get('/products/:id/reviews',ReviewController.getReview);
reviewRouter.post('/products/:id/reviews',ReviewController.createReview);
reviewRouter.put("/products/:productId/reviews/:id", ReviewController.updateReview);
reviewRouter.delete("/products/:productId/reviews/:id",ReviewController.deleteReview);



export default reviewRouter;