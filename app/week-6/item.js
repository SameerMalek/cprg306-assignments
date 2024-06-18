import React from 'react'

export default function Item({name,quantity,category}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className='flex items-center'>
            <div className="flex-1">
                <h3 className="text-black font-semibold">{name}</h3>
                <span className="text-gray-600">{category}</span>
            </div>
            <span className='bg-blue-500 text-white rounded-full px-3 py-1 m-5'>{quantity}</span>
        </div>
    </div>
  )
}

