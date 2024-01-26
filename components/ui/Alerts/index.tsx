'use client'
import { InfoIcon, X } from 'lucide-react'
import React, {useState, useEffect, ReactNode} from 'react'

type Props ={
    title?: string;
    description?: string;
    type: 'success'|'warning'|'error'
    icon?: ReactNode
}
export const Alert :React.FC<Props> =({title,description, type})=> {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const renderBg = ()=>{
        if (type ==='success') return 'bg-meta-7 text-white'
        else if (type ==='warning') return 'bg-meta-6/10 text-meta-6 shadow-xl border border-meta-6/30'
        return 'bg-[#fffcf0] text-danger shadow shadow-danger/5 border border-danger/5'
    }
    const handleHide =()=>{
      setIsVisible(false);
    }
    useEffect(()=>{
      setTimeout(()=> setIsVisible(false), 4000)
    },)
    return (
      <div className={`p-6 flex rounded-xl  ${renderBg()} ${!isVisible? 'hidden':''}`}>   
      <InfoIcon size={30} className="mr-3"/> 
      {title}
      <div className="text-sm sm:text-medium xl:text-lg font-medium text-center">
      {description}
    </div>
    <button className="ml-auto h-8 w-8 -my-1.5 rounded-lg p-1.5" onClick={handleHide}><X/></button>
    </div>
    );
  }