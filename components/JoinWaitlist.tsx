"use client"

import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'



export function JoinWaitlist({ text, loading, error, onClick, success }: { text: string, loading?: boolean, error?: string, onClick?: () => void, success?: boolean }) {
    return (
        <button onClick={onClick} className={`${error ? 'bg-red-500' : success ? 'bg-green-600' : 'bg-[#0a0d12]'} hover:cursor-pointer relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm`}>
            <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-4 py-2.5 relative">
                <div className="font-semibold text-white text-[16px]">
                    {error ? error : success ? 'Success! email sent!' : loading ? <Hourglass
                        size="20"
                        bgOpacity="0.1"
                        speed="1.75"
                        color="white"
                    /> : text}
                </div>
            </div>
        </button>
    )
}
