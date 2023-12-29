import React from 'react'

const ChevronDown = () => {
  return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path
          fillRule='evenodd'
          d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
          clipRule='evenodd'
        />
      </svg>
  );
}

const ChevronUp = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill='currentColor'
      className='w-6 h-6'
    >
      <path
        fillRule='evenodd'
        d='M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export {ChevronDown, ChevronUp}