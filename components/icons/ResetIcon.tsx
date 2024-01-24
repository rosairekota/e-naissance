import { cn } from '@/lib/utils'
import React from 'react'

type Props ={
    className: string
}
const ResetIcon:React.FC<Props> = ({className, ...props}) =>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn('"w-6 h-6', className)} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
  
  )
}

export default ResetIcon