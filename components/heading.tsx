import { Separator } from '@/components/ui/separator';
import React from 'react'

interface HeadingProps {
    title: string;
    subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({title, subtitle}) => {
  return (
    <header>
        <h1 className='text-4xl font-bold'>{title}</h1>
        {subtitle && <p className='text-sm text-muted-foreground'>{subtitle}</p>}
        <Separator className='mt-4' />
    </header>
  )
}

export default Heading