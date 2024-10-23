import { SkeletonCard } from '@/components/ui/skeleton-card'
import React from 'react'

const Loading = () => {
  return (
    <section>
        <div className='container py-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12'>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    </section>
  )
}

export default Loading