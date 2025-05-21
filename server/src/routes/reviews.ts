import express, { NextFunction } from "express";
import { Request, Response } from "express";
const reviewRouter = express.Router();
import Review from "../models/reviewModel";
import { ReviewController } from '../controller/reviewController';

reviewRouter.get('/products/:id/reviews',ReviewController.getReview);



export default reviewRouter;