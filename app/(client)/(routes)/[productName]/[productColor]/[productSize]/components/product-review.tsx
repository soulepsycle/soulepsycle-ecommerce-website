import { Star } from 'lucide-react'
import React from 'react'

const ProductReview = ({
    title,
    rating,
    reviewed_at,
    comment,
    user
} : {
    title: string,
    rating: number,
    reviewed_at: string,
    comment: string,
    user: string,
}) => {
  return (
    <div>
        {/* Review Header */}
        <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <div className='flex justify-between items-center'>
                {/* Rating */}
                <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4' />
                    <Star className='w-4 h-4' />
                    <Star className='w-4 h-4' />
                    <Star className='w-4 h-4' />
                    <Star className='w-4 h-4' />
                </div>

                {/* Review Date */}
                <div>
                    <h3 className='text-lg text-muted-foreground'>{user} - {reviewed_at}</h3>
                </div>
            </div>
        </div>

        {/* Review Content */}
        <div className='py-2'> 
            {comment}
        </div>
    </div>
  )
}

export default ProductReview