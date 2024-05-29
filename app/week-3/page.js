import React from 'react'
import ItemList from './item-list'

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center" >Shopping List</h1>
      <ItemList/>
    </main>
  )
}
