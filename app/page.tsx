import Image from "next/image";
import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';
import { DemoBookButton } from "@/components/DemoBookButton";


// Background Pattern Component
function BackgroundPattern() {
  return (
    <div className="absolute h-[1440px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[1920px] z-[1]">
      <div className="relative size-full">
        <div className="absolute left-1/2 size-[1440px] top-0 translate-x-[-50%]">
          <div
            className="absolute left-1/2 size-[1440px] top-0 translate-x-[-50%]"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Video Overlay Component
function VideoOverlayAction() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center relative size-full">
      <div className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-16">
        <div className="relative shrink-0 size-5">
          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        </div>
      </div>
    </div>
  );
}

// Check Icon Component
function CheckIcon() {
  return (
    <div className="overflow-clip relative rounded-[9999px] shrink-0 size-7 bg-purple-50 flex items-center justify-center">
      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

// Featured Icon Component
function FeaturedIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f4ebff] overflow-clip relative rounded-[9999px] shrink-0 size-12 flex items-center justify-center">
      {children}
    </div>
  );
}

// Star Icon Component
function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Hero Header Section
function HeroHeaderSection() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center justify-start relative size-full">
      {/* Header Navigation */}
      <div className="block h-20 overflow-visible relative shrink-0 w-full z-[3]">
        <div className="absolute content-stretch flex flex-col h-20 items-center justify-center left-0 right-0 top-0">
          <div className="box-border content-stretch flex gap-4 items-center justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
            <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
              <Image src="/images/trazo_logo.png" alt="Trazo Logo" width={80} height={40} className="h-10 w-auto" />
            </div>
            <div className="basis-0 content-stretch flex gap-5 grow items-center justify-start min-h-px min-w-px shrink-0" />
            <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                <DemoBookButton/>
              <button className="bg-[#0a0d12] relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm">
                <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-4 py-2.5 relative">
                  <div className="font-semibold text-white text-[16px]">
                    Join our Waitlist
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="box-border content-stretch flex flex-col gap-16 items-center justify-center pb-24 pt-16 px-0 relative shrink-0 w-full z-[2]">
        <div className="box-border content-stretch flex gap-20 isolate items-center justify-center max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
          {/* Left Content */}
          <div className="basis-0 content-stretch flex flex-col gap-12 grow items-start justify-start min-h-px min-w-px relative shrink-0 z-[2]">
            <div className="content-stretch flex flex-col gap-6 items-start justify-center leading-[0] not-italic relative shrink-0 w-full">
              <h1 className="font-semibold min-w-[768px] relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-full leading-[60px]">
                The design canvas where versions, feedback, and tasks live together.
              </h1>
              <p className="font-normal max-w-[560px] relative shrink-0 text-[#535862] text-[20px] w-full leading-[30px]">
                The ultimate collaboration platform for architects and interior designers. Experience seamless project management with integrated communication tools, version control and real-time feedback.
              </p>
            </div>

            {/* Email Capture */}
            <div className="content-stretch flex gap-4 items-start justify-start max-w-[480px] relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-[335px]">
                <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-3.5 py-3 relative rounded-[8px] shrink-0 w-full border border-[#d5d7da] shadow-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="basis-0 grow font-normal text-[#717680] text-[16px] leading-[24px] outline-none bg-transparent"
                  />
                </div>
                <p className="font-normal text-[#535862] text-[14px] leading-[20px] w-full">
                  We care about your data in our <span className="underline">privacy policy</span>.
                </p>
              </div>
              <button className="bg-[#0a0d12] relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm">
                <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-[18px] py-3 relative">
                  <div className="font-semibold text-white text-[16px] leading-[24px]">
                    Join Our Waitlist
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Video Content */}
          <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[640px] max-w-[560px] min-h-px min-w-px relative shrink-0 z-[1] bg-gray-200 rounded-lg">
              
              <BackgroundVideo className="basis-0 bg-center bg-cover bg-no-repeat grow h-[640px] max-w-[560px] min-h-px min-w-px relative shrink-0 z-[1] bg-gray-200 rounded-lg" src={"https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_gif.mp4"} />
              {/* <video className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex inset-0 items-center justify-center rounded-lg" width="320" height="240" controls preload="none">
                <source src="/videos/trazo_gif.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}

            {/* Hand-drawn arrow */}
            {/* <div className="absolute bottom-[-10.66px] flex h-[296.43px] items-center justify-center left-[-130.6px] w-[301.528px]">
              <div className="flex-none rotate-[39.174deg] scale-y-[-100%]">
                <div className="h-[194.76px] relative w-[230.271px]">
                  <svg className="w-full h-full" viewBox="0 0 230 195" fill="none">
                    <path d="M10 10 Q 50 50 100 80 Q 150 110 200 150" stroke="#181d27" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M195 140 L 200 150 L 190 160" stroke="#181d27" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <BackgroundPattern />
    </div>
  );
}

// Features Section
function FeaturesSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-24 items-center justify-start pb-24 pt-0 px-0 relative size-full">
      {/* Header */}
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-8 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-5 items-center justify-start max-w-[768px] text-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="text-[#6941c6] text-[16px] font-semibold leading-[24px] w-full">
                The Trazo Vision
              </div>
              <h2 className="text-[#181d27] text-[36px] font-semibold tracking-[-0.72px] leading-[44px] w-full">
                All-in-one design collaboration for architects and designers—create freely without juggling tools.
              </h2>
            </div>
            <p className="font-normal text-[#535862] text-[20px] leading-[30px] w-full">
              Say goodbye to sifting through endless emails for documents and making redlines on Acrobat. Our all-in-one solution simplifies your design workflow, allowing architects and designers to collaborate seamlessly without the chaos of multiple tools.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 1 - Unified Project Workspaces */}
      <div className="box-border content-stretch flex gap-24 items-center justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
            <FeaturedIcon>
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </FeaturedIcon>

            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <h3 className="font-semibold text-[#181d27] text-[30px] leading-[38px] w-full">
                Unified Project Workspaces
              </h3>
              <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                A centralized hub for all your files, revisions, and action items, ensuring your creative projects stay organized and on track.
              </p>
            </div>
          </div>

          <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pl-4 pr-0 py-0 relative shrink-0 w-full">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Stop digging through emails and text messages
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Bring together files, contextualize tasks and manage the revision process
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  One workspace and inbox designed for the way you work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="basis-0 grow h-[512px] min-h-px min-w-px relative shrink-0">
          <div className="absolute bg-white box-border content-stretch flex flex-col items-start justify-start left-0 p-[2.51px] rounded-[32px] top-0 border border-[rgba(0,0,0,0.08)] shadow-lg">
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-start overflow-clip p-[2.51px] relative rounded-[28px] shrink-0">
              <div className="bg-neutral-50 relative rounded-[24px] shrink-0 border border-[#e9eaeb]">
                <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
                  <Image 
                    src="/images/dashboard_old.png" 
                    alt="Unified Project Workspaces Dashboard" 
                    width={753} 
                    height={502}
                    className="h-[1918] w-[940px] object-cover rounded-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2 - Collaborative Boards */}
      <div className="box-border content-stretch flex gap-24 items-center justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        {/* Feature Image */}
        <div className="basis-0 grow h-[512px] min-h-px min-w-px relative shrink-0">
          <div className="absolute bg-white box-border content-stretch flex flex-col items-start justify-start right-[0.02px] p-[2.51px] rounded-[32px] top-0 border border-[rgba(0,0,0,0.08)] shadow-lg">
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-start overflow-clip p-[2.51px] relative rounded-[28px] shrink-0">
              <div className="bg-neutral-50 relative rounded-[24px] shrink-0 border border-[#e9eaeb]">
                <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
                  <Image 
                    src="/images/tasks_cropped.png" 
                    alt="Collaborative Boards and Commenting" 
                    width={753} 
                    height={502}
                    className="h-[501.961px] w-[752.941px] object-cover rounded-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
            <FeaturedIcon>
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </FeaturedIcon>

            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <h3 className="font-semibold text-[#181d27] text-[30px] leading-[38px] w-full">
                Collaborative Boards and Commenting
              </h3>
              <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                Experience the future of collaboration with our integrated real-time commenting system, designed to enhance your workflow by providing contextual feedback right where you need it.
              </p>
            </div>
          </div>

          <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pl-4 pr-0 py-0 relative shrink-0 w-full">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Comments are placed and tracked on specific design elements
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Tag collaborators to chat or assign tasks within your files
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Keep people informed with instant updates, notifications and access tailored to their role
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3 - Version Control */}
      <div className="box-border content-stretch flex gap-24 items-center justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
            <FeaturedIcon>
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </FeaturedIcon>

            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <h3 className="font-semibold text-[#181d27] text-[30px] leading-[38px] w-full">
                Visual First Version Control & Comparison
              </h3>
              <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                Utilize Trazo's intuitive visual tools for effective version tracking, enabling you to easily compare drafts and keep tabs on your progress with precision.
              </p>
            </div>
          </div>

          <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pl-4 pr-0 py-0 relative shrink-0 w-full">
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Use advanced comparison tools to quickly analyze the differences between versions of your designs
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
              <CheckIcon />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <p className="font-normal text-[#535862] text-[18px] leading-[28px] w-full">
                  Effortlessly manage file status, track versions, and secure sign-offs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="basis-0 grow h-[512px] min-h-px min-w-px relative shrink-0">
          <div className="absolute bg-white box-border content-stretch flex flex-col items-start justify-start left-0 p-[2.51px] rounded-[32px] top-0 border border-[rgba(0,0,0,0.08)] shadow-lg">
            <div className="bg-white box-border content-stretch flex flex-col items-start justify-start overflow-clip p-[2.51px] relative rounded-[28px] shrink-0">
              <div className="bg-neutral-50 relative rounded-[24px] shrink-0 border border-[#e9eaeb]">
                <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative">
                  <Image 
                    src="/images/version_controll.png" 
                    alt="Visual First Version Control & Comparison" 
                    width={753} 
                    height={502}
                    className="h-[501.961px] w-[752.941px] object-cover rounded-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CTA Section
function CtaSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center pb-24 pt-0 px-0 relative size-full">
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="bg-neutral-50 box-border content-start flex flex-wrap gap-8 items-start justify-start p-[64px] relative rounded-[16px] shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-start max-w-[768px] min-w-[480px] relative shrink-0">
            <h2 className="font-semibold text-[#181d27] text-[36px] tracking-[-0.72px] leading-[44px] w-full">
              Join our beta program
            </h2>
            <p className="font-normal text-[#535862] text-[20px] leading-[30px] w-full">
              And be among the first to shape the future of design collaboration.
            </p>
          </div>
          <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0">
              <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0 w-80 border border-[#d5d7da] shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="basis-0 grow font-normal text-[#717680] text-[16px] leading-[24px] outline-none bg-transparent"
                />
              </div>
            </div>
            <button className="bg-[#0a0d12] relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm">
              <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-[18px] py-3 relative">
                <div className="font-semibold text-white text-[16px] leading-[24px]">
                  Join Beta
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-16 items-center justify-center px-0 py-24 relative size-full">
      <div className="box-border content-stretch flex items-center justify-center max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="basis-0 bg-neutral-50 content-stretch flex grow items-center justify-start min-h-px min-w-px overflow-clip relative rounded-[24px] shrink-0">
          <div className="basis-0 box-border content-stretch flex flex-col gap-10 grow items-start justify-center min-h-px min-w-px p-[64px] relative shrink-0">
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="font-medium text-[#181d27] text-[36px] tracking-[-0.72px] leading-[44px]">
                  "Untitled has saved us thousands of hours of work. We're able to attract talent and close hires much faster."
                </blockquote>
              </div>
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                <div className="font-semibold text-[#181d27] text-[18px] leading-[28px] w-full">
                  — Larah Biondo
                </div>
                <div className="font-normal text-[#535862] text-[16px] leading-[24px] w-full">
                  Senior Interior Designer, Design Solutions
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Image src="/images/larah_testimonial.png" alt="Larah Biondo Testimonial" width={480} height={448} />
            {/* <div className="bg-gray-200 h-full min-h-[448px] relative shrink-0 w-[480px] flex items-center justify-center">
              <span className="text-gray-500">Testimonial Image</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Newsletter CTA Section
function NewsletterCtaSection() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-16 items-center justify-start px-0 py-24 relative size-full">
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="content-start flex flex-wrap gap-8 items-start justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-start max-w-[768px] min-w-[480px] relative shrink-0">
            <h2 className="font-semibold text-[#181d27] text-[36px] tracking-[-0.72px] leading-[44px] w-full">
              Sign up for our newsletter
            </h2>
            <p className="font-normal text-[#535862] text-[20px] leading-[30px] w-full">
              Be the first to know about releases and industry news and insights.
            </p>
          </div>
          <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-[480px]">
            <div className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-3.5 py-2.5 relative rounded-[8px] shrink-0 w-full border border-[#d5d7da] shadow-sm">
                <input
                  type="email"
                  placeholder="olivia@untitledui.com"
                  className="basis-0 grow font-normal text-[#717680] text-[16px] leading-[24px] outline-none bg-transparent"
                />
              </div>
            </div>
            <button className="bg-[#0a0d12] relative rounded-[8px] shrink-0 border-2 border-[rgba(255,255,255,0.12)] shadow-sm">
              <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-[18px] py-3 relative">
                <div className="font-semibold text-white text-[16px] leading-[24px]">
                  Subscribe
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  const footerLinks = [
    {
      heading: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]
    },
    {
      heading: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
    },
    {
      heading: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
    },
    {
      heading: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
    }
  ];

  return (
    <div className="bg-[#0c0e12] box-border content-stretch flex flex-col gap-16 items-end justify-start pb-12 pt-16 px-0 relative size-full">
      <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start max-w-[1580px] px-8 py-0 relative shrink-0 w-full">
        <div className=" flex flex-wrap gap-16 items-center justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start max-w-80 min-w-80 relative shrink-0">
            <Image src="/images/full_logo_white_nobg.png" alt="Logo" width={550} height={550} />

            {/* <div className="h-[23px] w-[47px] bg-gray-400 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">LOGO</span>
            </div> */}
          </div>
          <div className="basis-0 content-stretch flex gap-8 grow items-start justify-start min-w-[800px] relative shrink-0">
            {footerLinks.map((column, index) => (
              <div key={index} className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-w-24 relative shrink-0">
                <div className="font-semibold text-[#717680] text-[14px] leading-[20px] w-full">
                  {column.heading}
                </div>
                <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                  {column.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                      <div className="font-semibold text-[#535862] text-[16px] leading-[24px]">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start max-w-[1280px] px-8 py-0 relative shrink-0 w-full">
        <div className="box-border content-center flex flex-wrap gap-8 items-center justify-start pb-0 pt-8 px-0 relative shrink-0 w-full border-t border-[#22262f]">
          <div className="font-normal text-[#94979c] text-[16px] leading-[24px]">
            © 2025 SiteStack Technologies, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroHeaderSection />
      <FeaturesSection />
      <CtaSection />
      <TestimonialSection />
      <NewsletterCtaSection />
      <Footer />
    </div>
  );
}
