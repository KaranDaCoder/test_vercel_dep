'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from '@/components/svgs/AllSvgs';
import { useRouter } from 'next/navigation';

const Add = () => {
  const router = useRouter();
 const [txDoneModal, setTxDoneModal] = useState(true);
 const [tx_statusModal, setTxStatusModal] = useState(true);
 const [successMsg, setSuccessMsg] = useState(false);
 const [errorMsg, setErrorMsg] = useState(false);
 const [tx_name, setTxName] = useState('');
 const [tx_date, setDate] = useState('');
 const [tx_amount, setAmount] = useState(Number);
 const [tx_state, setTxState] = useState('');
 const [tx_paid, setTxPaid] = useState('Capital One Ending 3344');
 const [tx_status, setTxStatus] = useState('Completed');
 const [tx_desc, setTxDesc] = useState('');


const handleCancelExpense = (e) => {
 e.preventDefault();
 setTxName('');
 setAmount('');
 setDate('')
 setTxDesc('')
 setTxState('')
 setSuccessMsg(false);
 setErrorMsg(false);
 router.push("/dashboard")
 
}

 const handleAddExpense = async (e) => {
  e.preventDefault();
   const create_expense_obj = {
     tx_name,
     tx_date,
     tx_amount,
     tx_state,
     tx_paid,
     tx_status,
     tx_desc,
   };
   console.log(JSON.stringify(create_expense_obj));
   try {
     const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/expenses`, {method : 'POST' , cache: 'no-store' , body: JSON.stringify(create_expense_obj)});
      if (!request.ok) {
      console.log(request.statusText);
       setSuccessMsg(false);
       setErrorMsg(true);
       return;
    }
    setSuccessMsg(true);
    setErrorMsg(false);
    router.refresh();
   

   } catch (error) {
     console.log(error);
      setSuccessMsg(false);
      setErrorMsg(true);
   }
 }
  return (
    <div className='flex items-center justify-center w-full h-full p-2 bg-slate-700'>
      <div className='flex items-start justify-start w-full h-full bg-white shadow-2xl lg:w-1/2 rounded-2xl'>
        <form className='flex flex-col items-start justify-center w-full h-full gap-4'>
          <h2 className='w-full text-2xl font-semibold text-center uppercase lg:text-2xl'>
            Add new Expense
          </h2>
          <div className='flex flex-col items-center justify-center w-full h-auto gap-4'>
            <input
              type='search'
              placeholder='Name'
              className='w-3/4 h-auto px-2 border-b outline-none border-fuchsia-900 placeholder:text-sm placeholder:italic'
              required={true}
              minLength={2}
              maxLength={50}
              value={tx_name}
              onChange={(e) => setTxName(e.target.value)}
            />

            <div className='flex items-center justify-between w-3/4 h-auto gap-4'>
              <input
                type='date'
                className='w-full h-auto text-center border-b outline-none border-fuchsia-900 lg:w-1/2'
                placeholder='mm-dd-yyyy'
                min='01-31-1990'
                max='12-31-2030'
                value={tx_date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type='number'
                className='w-1/2 h-auto px-2 border-b outline-none border-fuchsia-900 placeholder:text-sm placeholder:italic'
                placeholder='$$.$$'
                inputMode='decimal'
                pattern='[0-9]*'
                min={0.01}
                max={9999999}
                step='any'
                value={tx_amount}
                onFocus={(e) => setAmount('')}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type='text'
                className='w-1/2 h-auto px-2 border-b outline-none border-fuchsia-900 placeholder:text-sm placeholder:italic'
                placeholder='State'
                minLength={1}
                maxLength={2}
                value={tx_state}
                onChange={(e) => setTxState(e.target.value)}
              />
            </div>
            <div className='flex justify-center w-full'>
              <textarea
                cols='10'
                rows='8'
                className='w-3/4 h-20 border outline-none lg:h-40'
                value={tx_desc}
                onChange={(e) => setTxDesc(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-center w-full h-48 gap-3'>
              <div className='flex flex-col w-1/2 h-full'>
                <h2
                  className='py-2 text-sm text-center text-white rounded-md shadow-md cursor-pointer bg-fuchsia-900'
                  onClick={() => setTxDoneModal(!txDoneModal)}
                >
                  <span className='flex items-center justify-center capitalize'>
                    {tx_paid}
                    {txDoneModal ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </h2>
                {txDoneModal && (
                  <div className='flex flex-col items-center justify-center w-full h-full rounded-sm'>
                    <span className='relative flex items-center justify-center w-full py-2 border-b cursor-pointer'>
                      <p
                        className='w-full text-sm font-semibold text-center text-slate-700'
                        onClick={() => {
                          setTxPaid('Capital One Ending 3344'),
                            setTxDoneModal(false);
                        }}
                      >
                        Capital One Ending 3344
                      </p>
                    </span>
                    <span className='relative flex items-center justify-center w-full py-2 border-b cursor-pointer'>
                      <p
                        className='w-full text-sm font-semibold text-center text-slate-700'
                        onClick={() => {
                          setTxPaid('Wells Fargo Ending 9521'),
                            setTxDoneModal(false);
                        }}
                      >
                        Wells Fargo Ending 9521
                      </p>
                    </span>
                    <span className='flex items-center justify-center w-full py-2 border-b cursor-pointer'>
                      <p
                        className='w-full text-sm font-semibold text-center text-slate-700'
                        onClick={() => {
                          setTxPaid('Apple Card Ending 3735'),
                            setTxDoneModal(false);
                        }}
                      >
                        Apple Card Ending 3735
                      </p>
                    </span>
                    <span className='flex items-center justify-around w-full py-2 cursor-pointer'>
                      <p
                        className='w-1/2 text-sm font-semibold text-center text-slate-700'
                        onClick={() => {
                          setTxPaid('Cash'), setTxDoneModal(false);
                        }}
                      >
                        Cash
                      </p>
                    </span>
                  </div>
                )}
              </div>
              <div className='flex flex-col w-1/4 h-full'>
                <h2
                  className='py-2 text-sm text-center text-white bg-green-700 rounded-md shadow-lg cursor-pointer'
                  onClick={() => setTxStatusModal(!tx_statusModal)}
                >
                  <span className='flex items-center justify-center font-light capitalize'>
                    {tx_status}
                    {tx_statusModal ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </h2>
                {tx_statusModal && (
                  <div className='flex flex-col items-center justify-start w-full h-full rounded-sm'>
                    <span
                      className='relative flex items-center justify-center w-full py-2 border-b cursor-pointer'
                      onClick={() => {
                        setTxStatus('Completed'), setTxStatusModal(false);
                      }}
                    >
                      <p className='w-full text-sm font-semibold text-center text-slate-700'>
                        Completed
                      </p>
                    </span>
                    <span
                      className='flex items-center justify-center w-full py-2 border-b cursor-pointer'
                      onClick={() => {
                        setTxStatus('Pending'), setTxStatusModal(false);
                      }}
                    >
                      <p className='w-full text-sm font-semibold text-center text-slate-700'>
                        Pending
                      </p>
                    </span>
                    <span
                      className='flex items-center justify-around w-full py-2 cursor-pointer'
                      onClick={() => {
                        setTxStatus('Canceled'), setTxStatusModal(false);
                      }}
                    >
                      <p className='w-full text-sm font-semibold text-center text-slate-700'>
                        Canceled
                      </p>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <h2 className='text-center text-black'>
            {successMsg
              ? 'Successfully Added Expense!'
              : errorMsg
              ? 'Something went Wrong!'
              : ''}
          </h2>
          <div className='flex justify-center w-full gap-4'>
            <button
              type='submit'
              className='w-1/3 px-3 py-2 text-sm text-white bg-green-800 rounded-md shadow-xl lg:text-lg'
              onClick={handleAddExpense}
            >
              ADD
            </button>
            <button
              type='submit'
              className='w-1/3 px-3 py-2 text-sm text-white bg-red-700 rounded-md shadow-xl lg:text-lg'
              onClick={handleCancelExpense}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add