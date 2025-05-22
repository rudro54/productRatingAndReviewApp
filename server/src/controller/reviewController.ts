import { NextFunction } from "express";
import { Request, Response } from "express";
import Review from "./../models/reviewModel";

export const ReviewController = {
  getReview: function (req: Request, res: Response, next: NextFunction): void {
    let result = Review.getReviewsByProductId(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "review not found" });
    }
  },

  createReview: function (
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      const productId = req.params.id;
      const { author, rating, comment } = req.body;
      if (!author || !rating || !comment) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }
      const newReview = Review.createReview({
        productId,
        author,
        rating,
        comment,
      });
      res.status(201).json({ message: "Review Created", review: newReview });
    } catch (err) {
      console.log("error : ", err);
      res.status(500).json({ message: "internal server error" });
    }
  },
   

  updateReview:function(
    req:Request,
    res:Response,
    next: NextFunction
  ):void{
    try{
    const productId = req.params.productId;
    const reviewId = req.params.id;
    const { author, rating, comment } = req.body;

       if (!author || !rating || !comment) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const updatedReview = Review.updateReviewById(productId, reviewId, {
      author,
      rating,
      comment,
    });
     if (!updatedReview) {
      res.status(404).json({ message: "Review not found or does not belong to this product" });
    } else {
      res.status(200).json({ message: "Review updated", review: updatedReview });
    }

    }catch(err){
    console.error("error updating review:", err);
    res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteReview: function (req: Request, res: Response, next: NextFunction): void {
  try {
    const { productId, id: reviewId } = req.params;

    const deleted = Review.deleteReviewById(productId, reviewId);

    if (deleted) {
      res.status(200).json({ message: "Review deleted successfully" });
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    console.error("error deleting review:", error);
    res.status(500).json({ message: "internal server error" });
  }
}




};
