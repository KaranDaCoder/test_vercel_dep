import Link from 'next/link';
import React from 'react'

const Dashboard = async () => {
 const fetchAllPosts = async() => {
  try {
   const request = await fetch(
     `${process.env.NEXTAUTH_URL}/api/expenses`,
     {
       cache: 'no-store',
     }
   );
   const resp = await request.json();
   return resp;
  } catch (error) {
   console.log(error);
  }
 }
 const data = await fetchAllPosts();
 console.log(data)
  return (
    <div className='w-1/2 border'>
      <h1>Dashboard - {data?.message[0]?.tx_amount}</h1>
      {data?.message && <div className='flex flex-col'>
        {data.message.map((exp) => (
          <div className='flex justify-around w-full' key={exp._id}>
            <span>{exp?.tx_name}</span>
            <span>{exp?.tx_date}</span>
            <span>{exp?.tx_amount}</span>
          </div>
        ))}
      </div>}
      <Link href={'/add'}>ADD</Link>
    </div>
  );
}

export default Dashboard