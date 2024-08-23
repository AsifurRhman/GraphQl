import { categories, products, reviews } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => products,
        product: (parent:any, args:{productId:String}, context:any) => {
            const result = products.find(pd => pd.id === args.productId);
            return result
        },

        categories: () => categories,
        category: (parent: any, args: { categoryId: String }, context: any) => {
            const result = categories.find(c => c.id === args.categoryId)
            return result

         }
    },
//category: name should be same as typedef
    Product: {
        category: ({CategoryId},args:any,context:any) => {  
            const result = categories.find(category => category.id === CategoryId);
            return result;
        },
        reviews: ({id},args:any,context:any) => {
            const result = reviews.filter(review => review.productId === id);
            return result;
        }
    },
    //product: name should be same as typedef
    Category: {
        product: ({id},args:any,context:any) => {
            const result = products.filter(pd => pd.CategoryId === id);
            return result;
        }
    },

   
};