import { error } from "console";
import productData from "../data/ProductData";

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

  static getProducts() {
    return productData;
  }

  static getProductsSortedByDate() {
    return productData
      .slice()
      .sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));
  }

  static getProductById(id: string) {
    let result = productData.find((product) => product.id === id);
    if (result) {
      return result;
    } else {
      return [];
    }
  }

  static getProductByQuery(query: string) {
    
    return productData.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    
  }
}

export default Product;
