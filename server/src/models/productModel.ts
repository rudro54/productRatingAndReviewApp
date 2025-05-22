// File: models/Product.ts
import productData from "../data/ProductData";
import reviewData from "../data/ReviewData"; // <-- Make sure to import your review data

class Product {
  public id: string;
  public name: string;
  public category: string;
  public price: string;
  public dateAdded: string;
  public averageRating: string;

  constructor(
    id: string,
    name: string,
    category: string,
    price: string,
    dateAdded: string,
    averageRating: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.dateAdded = dateAdded;
    this.averageRating = averageRating;
  }


  static calculateAverageRating(productId: string): number {
    const relevantReviews = reviewData.filter((r) => r.productId === productId);
    if (relevantReviews.length === 0) return 0;
    const sum = relevantReviews.reduce((acc, r) => acc + Number(r.rating), 0);
    return Math.round(sum / relevantReviews.length);
  }

  static getProducts() {
    return productData.map((product) => ({
      ...product,
      averageRating: Product.calculateAverageRating(product.id),
    }));
  }

  static getProductsSortedByDate() {
    return Product.getProducts().sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  }

  static getProductById(id: string) {
    const product = Product.getProducts().find((p) => p.id === id);
    return product || null;
  }

  static getProductByQuery(query: string) {
    query = query.toLowerCase();
    return Product.getProducts().filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }
}

export default Product;
