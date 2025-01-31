
import React from 'react'
import { Link } from 'react-router-dom'

function AdminMenu(props) {

    
    return (
        <> 
            
            <section className='mt-20'>
            <p className='text-center font-simple text-4xl ml-3 mb-3'> Admin Panel</p>
                <div className="flex flex-col mt-6 68ml-5 dark:bg-gray-800 dark:text-gray-100">

                    <Link  to="/dashboard/admin" className={`${props.active === "dashboard"?"bg-blue-400":"bg-none"} text-center  my-2 py-1 border-b-2 dark:border-gray-700 hover:bg-gray-400 rounded-lg border-t-2 hover:text-white active:bg-gray-600 focus:outline focus:ring mx-2 `}>Dashboard</Link>
                    <Link  to="/dashboard/admin/orders" className={`${props.active === "orders"?"bg-blue-400":"bg-none"} text-center my-2 py-1 border-b-2 dark:border-gray-700 hover:bg-gray-400 rounded-lg border-t-2 hover:text-white active:bg-gray-600 focus:outline focus:ring mx-2 `}>Orders</Link>

                  
                    <Link  to="/dashboard/admin/create-category" className={`${props.active === "create-category"?"bg-blue-400":"bg-none"} text-center my-2 py-1 border-b-2 dark:border-gray-700 hover:bg-gray-400 rounded-lg border-t-2 hover:text-white active:bg-gray-600 focus:outline focus:ring mx-2 `}>Create Category</Link>

                    <Link  to="/dashboard/admin/create-product" className={`${props.active === "create-product"?"bg-blue-400":"bg-none"} text-center my-2 py-1 border-b-2 dark:border-gray-700 hover:bg-gray-400 rounded-lg border-t-2 hover:text-white active:bg-gray-600 focus:outline focus:ring mx-2 `}>Create Product</Link>
                    <Link  to="/dashboard/admin/get-product" className={`${props.active === "get-product"?"bg-blue-400":"bg-none"} text-center my-2 py-1 border-b-2 dark:border-gray-700 hover:bg-gray-400 rounded-lg border-t-2 hover:text-white active:bg-gray-600 focus:outline focus:ring mx-2 `}>Products</Link>
                </div>
            </section>

        </>
    )
}

export default AdminMenu
