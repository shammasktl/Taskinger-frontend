import React from 'react'
import { ClipboardList } from 'lucide-react'

const Dashboard = () => {
  return (
    <section className='px-9 py-6 flex flex-col gap-4'>
      <h1 className='font-semibold text-2xl'>Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-3.5 rounded relative bg-white border border-gray-600">
          <ClipboardList color='#5B49FF' />
        </div>
        <div className="p-3.5 rounded relative bg-white border border-gray-600">

        </div>
      </div>
    </section>
  )
}

export default Dashboard
