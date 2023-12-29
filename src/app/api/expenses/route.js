import Category from "@/models/Category";
import Expense from "@/models/Expense"
import { connectDb } from "@/utils/dbConnect"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {
 try {
  await connectDb();
  const all_exp = await Expense.find({}).sort({'tx_date' : -1});
  return new NextResponse(JSON.stringify({ message: all_exp }), {
    status: 200,
  });
 } catch (error) {
  console.log(error)
  return new NextResponse(JSON.stringify({message: 'something went wrong!'}), {status:500})
 }
}  


export const POST = async(request, {params}) => {
 try {
  await connectDb();
  const { tx_name, tx_date, tx_amount, tx_state, tx_paid, tx_status, tx_desc , tx_category } =
    await request.json();

  const create_expense = {
    tx_name,
    tx_date,
    tx_amount,
    tx_state,
    tx_paid,
    tx_status,
    tx_desc,
    tx_category
  };
  
  const new_expense =   await Expense.create(create_expense);
  return new NextResponse(JSON.stringify(new_expense), { status: 201 });
 } catch (error) {
  console.log(error)
  return new NextResponse(JSON.stringify(error), { status: 500 });
 }
}