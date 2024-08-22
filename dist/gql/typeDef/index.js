export const typeDefs = `#graphql

type Product {
      id: ID!
      name: String
      image: String
      description: String
      price: Float
      quantity: Int
      onStock: Boolean
      category:Category
      reviews: [Review]

    }


type Category {

id:ID!
name: String
product: [Product]

}

type Review{
 id: ID!
      productId: String
      reviewer: String
      rating: Float
      comment: String
      date: String

}


  type Query {
products :[Product]
product(productId:ID!):  Product

categories: [Category]
category(categoryId:ID!): Category
  }
`;
