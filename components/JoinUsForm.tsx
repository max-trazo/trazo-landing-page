"use client"
import { sendWaitlistEmail, sendBetaEmail, sendNewsletterEmail } from "@/lib/actions/emailActions";
import { JoinWaitlist } from "./JoinWaitlist";
import { useState } from "react";

interface JoinUsFormProps {
    type: "waitlist" | "beta" | "newsletter"
}

export function JoinUsForm({ type }: JoinUsFormProps) {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const text = type === "waitlist" ? "Join Our Waitlist" : type === "beta" ? "Join Our Beta" : "Subscribe to Our Newsletter";

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = async () => {
        if (!isValidEmail(email)) {
            setError("Invalid email!");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }

        setIsLoading(true);
        try {
            if (type === "waitlist") {
                await sendWaitlistEmail(email);
            } else if (type === "beta") {
                await sendBetaEmail(email);
            } else if (type === "newsletter") {
                await sendNewsletterEmail(email);
            }
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
            setEmail("");
        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    return (
        <div className="content-stretch flex gap-4 items-start justify-start max-w-[480px] relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-[335px]">
                <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-3.5 py-3 relative rounded-[8px] shrink-0 w-full border border-[#d5d7da] shadow-sm">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="basis-0 grow font-normal text-[#717680] text-[16px] leading-[24px] outline-none bg-transparent"
                    />
                </div>
                <p className="font-normal text-[#535862] text-[14px] leading-[20px] w-full">
                    We care about your data in our <span className="underline">privacy policy</span>.
                </p>
            </div>
            <JoinWaitlist hasForm={true} text={text} onClick={handleSubmit} loading={isLoading} error={error} success={success} />
        </div>
    )
}