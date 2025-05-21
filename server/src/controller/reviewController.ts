import { NextFunction } from "express";
import { Request, Response } from "express";
import Review from './../models/reviewModel'



export const ReviewController = {

    getReview :function(req:Request, res:Response, next:NextFunction):void{
        let result = Review.getReviewsByProductId(req.params.id);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({message:"review not found"});
        }
        
        }
    




}

