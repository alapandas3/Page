import React from 'react'

export default function Cards({limit}) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className=' text-lg text-center font-semibold p-2 m-2 flex flex-col border border-red-300'>
        {arr.at({limit})}
        </div>
    </>
  )
}
