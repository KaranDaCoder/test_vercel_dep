import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
   grocery : {
    type: [Array],
   },
   grooming : {
    type: [Array],
   },
   other: {
    type: [Array],
   }
  },
  { timestamps: true }
);
const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);
export default Category;
