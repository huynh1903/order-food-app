import React from 'react'
import { feedbacks } from '../assets/data'

const Reviews = () => {
  return (
    <div className='flex flex-col gap-4'>
      {feedbacks.map(feedback => (
        <div key={feedback.id} className='p-4 rounded-md border-[1px] border-slate-100 shadow shadow-slate-300'>
            <p className='text-slate-700'>"{feedback.feedback}"</p>
            <div className='flex items-center mt-2'>
                <img className='w-12 h-12 rounded' src={feedback.avatar} alt={`image ${feedback.name}`} />
                <span className='ml-2 text-slate-800 font-medium'>{feedback.name} ({feedback.location})</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Reviews
