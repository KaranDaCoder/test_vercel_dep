'use client';
import ExpenseCard from '@/components/expensecard/ExpenseCard';
import Link from 'next/link';
// import React, { useState } from 'react'

const fetchAllPosts = async () => {
  try {
    const request = await fetch(`${process.env.NEXTAUTH_URL}/api/expenses`, {
      cache: 'no-store',
    });
    const resp = await request.json();
    return resp;
  } catch (error) {
    console.log(error);
  }
};
const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center w-full h-full bg-slate-50'>
        <div className='flex flex-col w-5/6 gap-4'>
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>

      <Link href={'/add'}>ADD</Link>
    </div>
  );
};

export default Dashboard;
