import Header from '@/app/(private)/components/header'
import React from 'react'
import { ProductDataTable } from './components/product-data-table'
import { columns, Product } from './components/columns'

async function getData(): Promise<Product[]> {
  return [
    { id: 1, name: "Classic Tote", category: "tote-bag", stock: 50, status: "IN_STOCK" },
    { id: 2, name: "Graphic T-shirt", category: "shirts", stock: 5, status: "LOW_STOCK" },
    { id: 3, name: "Eco-friendly Tote", category: "tote-bag", stock: 0, status: "OUT_OF_STOCK" },
    { id: 4, name: "Plain White Shirt", category: "shirts", stock: 100, status: "IN_STOCK" },
    { id: 5, name: "Vintage Tote", category: "tote-bag", stock: 2, status: "LOW_STOCK" },
    { id: 6, name: "Logo Tee", category: "shirts", stock: 0, status: "OUT_OF_STOCK" },
    { id: 7, name: "Leather Tote", category: "tote-bag", stock: 25, status: "IN_STOCK" },
    { id: 8, name: "Striped Shirt", category: "shirts", stock: 1, status: "LOW_STOCK" },
    { id: 9, name: "Canvas Tote", category: "tote-bag", stock: 0, status: "OUT_OF_STOCK" },
    { id: 10, name: "Black Tee", category: "shirts", stock: 45, status: "IN_STOCK" },
    { id: 11, name: "Denim Tote", category: "tote-bag", stock: 8, status: "LOW_STOCK" },
    { id: 12, name: "Oversized Shirt", category: "shirts", stock: 0, status: "OUT_OF_STOCK" },
    { id: 13, name: "Mini Tote", category: "tote-bag", stock: 40, status: "IN_STOCK" },
    { id: 14, name: "Printed T-shirt", category: "shirts", stock: 3, status: "LOW_STOCK" },
    { id: 15, name: "Cotton Tote", category: "tote-bag", stock: 60, status: "IN_STOCK" },
    { id: 16, name: "Polo Shirt", category: "shirts", stock: 7, status: "LOW_STOCK" },
    { id: 17, name: "Large Tote", category: "tote-bag", stock: 0, status: "DISCONTINUED" },
    { id: 18, name: "V-neck Shirt", category: "shirts", stock: 0, status: "OUT_OF_STOCK" },
    { id: 19, name: "Foldable Tote", category: "tote-bag", stock: 20, status: "IN_STOCK" },
    { id: 20, name: "Slim-fit Tee", category: "shirts", stock: 50, status: "IN_STOCK" },
  ]
}

const InventoryPage = async () => {

  const data = await getData();

  return (
    <section>
        <div className='container py-6'>
            <Header title='Inventory' />

            <ProductDataTable columns={columns} data={data} />
        </div>
    </section>
  )
}

export default InventoryPage