import { categories, products, reviews } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => {
            const result = products.find(pd => pd.id === args.productId);
            return result;
        },
        categories: () => categories,
        category: (parent, args, context) => {
            const result = categories.find(c => c.id === args.categoryId);
            return result;
        }
    },
    //category: name should be same as typedef
    Product: {
        category: (parent) => {
            const result = categories.find(category => category.id === parent.CategoryId);
            return result;
        },
        reviews: (parent) => {
            const result = reviews.filter(review => review.productId === parent.id);
            return result;
        }
    },
    //product: name should be same as typedef
    Category: {
        product: (parent) => {
            const result = products.filter(pd => pd.CategoryId === parent.id);
            return result;
        }
    },
};
