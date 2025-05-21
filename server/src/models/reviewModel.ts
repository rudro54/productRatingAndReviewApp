import reviewData from './../data/ReviewData';

class Review{
  public id: string;
  public productId: string;
  public author: string;
  public rating: string;
  public comment: string;
  public date: string;
  constructor(
    id: string,
    productId: string,
    author:string,
    rating: string,
    comment: string,
    date: string,
   
  ) {
    this.id = id;
    this.productId = productId;
    this.author = author;
    this.rating= rating;
    this.comment = comment;
    this.date = date;
    
}

static getReviewsByProductId(id:string){

    return reviewData.filter(review=>review.productId===id);

}



}

export default Review;