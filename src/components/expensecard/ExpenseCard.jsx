'use client'
import React, { useState } from 'react'


const ExpenseCard = () => {
 const [detailModal, setDetailModal] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p-2 transition-all duration-100 bg-white border rounded-lg shadow-md select-none hover:scale-105'>
      <div className='flex flex-col items-center justify-center w-full h-auto mb-2'>
        <div
          className='flex items-center w-full h-full cursor-pointer justify-evenly'
          onClick={() => setDetailModal(!detailModal)}
        >
          <div className='flex items-center justify-center h-auto gap-1 text-base tracking-tighter md:text-lg'>
            <span className='text-center'>Dec</span>
            <span className='text-center'>10</span>
            <span className='hidden text-center md:flex'>,</span>
            <span className='hidden text-center md:flex'>2023</span>
          </div>
          <div className='flex flex-col items-center justify-start w-1/2 h-auto'>
            <p className='text-sm capitalize lg:text-lg'>Walmart Supercenter</p>
            <p className='text-sm italic lg:text-base text-slate-600/80'>
              Grocery
            </p>
          </div>
          <div className='flex-col items-start justify-center hidden h-auto lg:block'>
            <p className='font-semibold text-fuchsia-900/70'>
              Capital One Ending 3340
            </p>
            <p className='text-base font-semibold tracking-wider text-green-800'>
              PAID
            </p>
          </div>
          <p className='flex items-center h-auto text-lg font-light tracking-wider lg:text-2xl'>
            <span className='mr-1 text-2xl font-semibold text-yellow-400'>
              $
            </span>
            <span className='text-2xl font-light'>1,456</span>
            <span className='text-sm font-light'>.32</span>
          </p>
        </div>
      </div>
      {detailModal && (
        <div className='flex flex-wrap items-start justify-start w-full h-auto px-2 py-1 text-xs shadow-sm rounded-xl lg:px-16 lg:text-base bg-slate-50'>
          <div className='flex flex-col items-start justify-start w-full h-auto gap-1 px-2 lg:w-5/6 lg:px-0'>
            <p className='mt-1 font-bold capitalize'>
              description:
              <span className='ml-2 font-light capitalize'>
                Indian Store - EP. Pani puri masala, pani puries, peas
                etc.Indian Store - EP. Pani puri masala, pani puries, peas etc.
              </span>
            </p>
            <p className='font-bold capitalize'>
              paid using:
              <span className='ml-2 font-light'>Cap One Ending 3340</span>
            </p>
            <p className='font-bold capitalize'>
              status:
              <span className='ml-2 font-light'>paid</span>
            </p>
            <p className='font-bold capitalize'>
              location:
              <span className='ml-2 font-light uppercase'>mn</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseCard