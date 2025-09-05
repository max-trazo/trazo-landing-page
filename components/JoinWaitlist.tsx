"use client"

import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'


const Loading = () => {
    return (
        <div className='flex gap-2.5 items-center justify-center transition-all duration-300 ease-out' >
        <Hourglass
            size="24"
            bgOpacity="0.1"
            speed="1.75"
            color="white"
        />
        </div>
    )
}


export function JoinWaitlist({ hasForm, text, loading, error, onClick, success }: { hasForm: boolean, text: string, loading?: boolean, error?: string, onClick?: () => void, success?: boolean }) {
    const scrollToWaitlistForm = () => {
        const formElement = document.getElementById('hero-waitlist-form');
        if (formElement) {
          formElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          
          // Add highlight effect
          const inputElement = formElement.querySelector('input[type="email"]') as HTMLElement;
          if (inputElement) {
            inputElement.focus();
          }
        }
      };
    
    return (
        <button 
            onClick={hasForm ? loading ? () => {} : onClick : scrollToWaitlistForm} 
            className={`
                ${error ? 'bg-red-500 hover:bg-red-600' : success ? 'bg-green-600 hover:bg-green-700' : 'bg-[#0a0d12] hover:bg-[#1a1d22]'} 
                hover:cursor-pointer relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm
                transition-all duration-300 ease-out
                hover:shadow-lg hover:-translate-y-0.5
                active:translate-y-0 active:shadow-sm
                transform
            `}
        >
            <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-4 py-2.5 relative">
                <div className={`
                    font-semibold text-white text-[16px] 
                    transition-all duration-300 ease-out
                    ${loading ? 'opacity-90' : 'opacity-100'}
                `}>
                    <span className="transition-all duration-300 ease-out">
                        {error ? error : success ? 'Success!' : loading ? <Loading/> : text}
                    </span>
                </div>
            </div>
        </button>
    )
}
