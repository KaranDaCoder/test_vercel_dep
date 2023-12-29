import mongoose, { Schema } from 'mongoose';

const ExpenseSchema = new Schema(
  {
    tx_name: {
      type: String,
      required: true,
    },
    tx_date: {
      type: Date,
      required: true,
    },
    tx_amount: {
      type: Number,
      required: true,
    },
    tx_state: {
      type: String,
      required: true,
      uppercase:true,
      default: 'MN',
    },
    tx_paid: {
      type: String,
      enum: [
        'Cash',
        'Capital One Ending 3344',
        'Apple Card Ending 3735',
        'Wells Fargo Ending 9521',
      ],
      default: 'Capital One Ending 3344',
    },
    tx_status: {
      type: String,
      enum: ['Pending', 'Canceled', 'Completed'],
      default: 'Completed',
    },
    tx_desc: {
      type: String,
    },
    tx_amount: {
      type: Number,
      required: [true, 'Problem! Transaction Amount cannot be empty'],
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    tx_date: {
      type: Date,
      required: [true, 'Problem! Transaction Date cannot be empty'],
    },
    tx_category: {
      type: String,
      
    }
  },
  { timestamps: true, toJSON: { getters: true } }
);
const Expense =
  mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema);
export default Expense;
