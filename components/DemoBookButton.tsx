"use client"
export function DemoBookButton() {
    return (
        <button onClick={() => window.open('https://app.apollo.io/#/meet/9mr-p7h-my3/45-min', '_blank')} className="bg-white hover:cursor-pointer relative rounded-[8px] shrink-0 border border-[#d5d7da] shadow-sm">
            <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-4 py-2.5 relative">
                <div className="font-semibold text-[#414651] text-[16px]">
                    Book a Demo
                </div>
            </div>
        </button>
    )
}
