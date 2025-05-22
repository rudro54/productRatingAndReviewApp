import ReviewData from "./../data/ReviewData";

class Review {
  public id: string;
  public productId: string;
  public author: string;
  public rating: string;
  public comment: string;
  public date: string;
  constructor(
    id: string,
    productId: string,
    author: string,
    rating: string,
    comment: string,
    date: string
  ) {
    this.id = id;
    this.productId = productId;
    this.author = author;
    this.rating = rating;
    this.comment = comment;
    this.date = date;
  }

  static getReviewsByProductId(id: string) {
    return ReviewData.filter((review) => review.productId === id);
  }

  static createReview(data: {
    productId: string;
    author: string;
    rating: string;
    comment: string;
  }): Review {
    const newReview = new Review(
      (ReviewData.length + 1).toString(),
      data.productId,
      data.author,
      data.rating,
      data.comment,
      new Date().toISOString()
    );

    ReviewData.push(newReview);
    return newReview;
  }

  static updateReviewById(
    productId: string,
    reviewId: string,
    data: { author: string; rating: string; comment: string }
  ): Review | null {
    const index = ReviewData.findIndex(
      (review) => review.id === reviewId && review.productId === productId
    );

    if (index === -1) return null;

    ReviewData[index].author = data.author;
    ReviewData[index].rating = data.rating;
    ReviewData[index].comment = data.comment;
    ReviewData[index].date = new Date().toISOString();

    return ReviewData[index];
  }

  static deleteReviewById(productId: string, reviewId: string): boolean {
    const index = ReviewData.findIndex(
      (review) => review.id === reviewId && review.productId === productId
    );

    if (index === -1) return false;

    ReviewData.splice(index, 1);
    return true;
  }
}

export default Review;
