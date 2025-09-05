"use client";

import Image from "next/image";
import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';
import { DemoBookButton } from "@/components/DemoBookButton";
import { JoinWaitlist } from "@/components/JoinWaitlist";
import { JoinUsForm } from "@/components/JoinUsForm";
import Link from "next/link";

// Check Icon Component
function CheckIcon() {
  return (
    <div className="overflow-clip relative rounded-full shrink-0 w-6 h-6 bg-purple-50 flex items-center justify-center">
      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

// Featured Icon Component
function FeaturedIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-purple-50 overflow-clip relative rounded-full shrink-0 w-10 h-10 flex items-center justify-center">
      {children}
    </div>
  );
}

// Star Icon Component
function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Mobile Hero Header Section
function MobileHeroHeaderSection() {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      {/* Mobile Header Navigation */}
      <div className="flex flex-col w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex flex-wrap items-center justify-between w-full px-4 py-4">
          <div className="flex items-center">
            <Image src="/images/trazo_logo.png" alt="Trazo Logo" width={60} height={30} className="h-8 w-auto" />
          </div>
          <div className="flex flex-wrap gap-2">
            <DemoBookButton />
            <JoinWaitlist hasForm={false} text="Join Waitlist" />
          </div>
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="flex flex-col w-full px-4 py-8 gap-8">
        {/* Hero Text */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="font-semibold text-gray-900 text-2xl md:text-3xl leading-tight w-full text-center">
            The design canvas where versions, feedback, and tasks live together.
          </h1>
          <p className="font-normal text-gray-600 text-base md:text-lg leading-relaxed w-full text-center">
            The ultimate collaboration platform for architects and interior designers. Experience seamless project management with integrated communication tools, version control and real-time feedback.
          </p>
        </div>

        {/* Mobile Email Capture */}
        <div className="flex flex-col w-full">
          <JoinUsForm type="waitlist" />
        </div>

        {/* Mobile Video */}
        <div className="flex flex-col w-full">
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
            <BackgroundVideo 
              className="w-full h-full object-cover" 
              src={"https://qckoojnshbvfpwgafdyu.supabase.co/storage/v1/object/public/landing_page/trazo_gif.mp4"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Features Section
function MobileFeaturesSection() {
  return (
    <div className="bg-white flex flex-col w-full px-4 py-12 gap-12">
      {/* Header */}
      <div className="flex flex-col gap-6 w-full text-center">
        <div className="flex flex-col gap-3 w-full">
          <div className="text-purple-600 text-sm font-semibold">
            The Trazo Vision
          </div>
          <h2 className="text-gray-900 text-xl md:text-2xl font-semibold leading-tight">
            All-in-one design collaboration for architects and designers—create freely without juggling tools.
          </h2>
        </div>
        <p className="font-normal text-gray-600 text-base leading-relaxed">
          Say goodbye to sifting through endless emails for documents and making redlines on Acrobat. Our all-in-one solution simplifies your design workflow.
        </p>
      </div>

      {/* Feature 1 - Unified Project Workspaces */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <FeaturedIcon>
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </FeaturedIcon>
            <h3 className="font-semibold text-gray-900 text-lg">
              Unified Project Workspaces
            </h3>
          </div>
          <p className="font-normal text-gray-600 text-base leading-relaxed">
            A centralized hub for all your files, revisions, and action items, ensuring your creative projects stay organized and on track.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full pl-4">
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Stop digging through emails and text messages
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Bring together files, contextualize tasks and manage the revision process
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              One workspace and inbox designed for the way you work
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="flex w-full">
          <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <Image
              src="/images/dashboard_old.png"
              alt="Unified Project Workspaces Dashboard"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Feature 2 - Collaborative Boards */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <FeaturedIcon>
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </FeaturedIcon>
            <h3 className="font-semibold text-gray-900 text-lg">
              Collaborative Boards and Commenting
            </h3>
          </div>
          <p className="font-normal text-gray-600 text-base leading-relaxed">
            Experience the future of collaboration with our integrated real-time commenting system, designed to enhance your workflow.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full pl-4">
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Comments are placed and tracked on specific design elements
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Tag collaborators to chat or assign tasks within your files
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Keep people informed with instant updates, notifications and access tailored to their role
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="flex w-full">
          <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <Image
              src="/images/comments_new.png"
              alt="Collaborative Boards and Commenting"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Feature 3 - Version Control */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <FeaturedIcon>
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </FeaturedIcon>
            <h3 className="font-semibold text-gray-900 text-lg">
              Visual First Version Control & Comparison
            </h3>
          </div>
          <p className="font-normal text-gray-600 text-base leading-relaxed">
            Utilize Trazo's intuitive visual tools for effective version tracking, enabling you to easily compare drafts and keep tabs on your progress.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full pl-4">
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Use advanced comparison tools to quickly analyze the differences between versions of your designs
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <CheckIcon />
            <p className="font-normal text-gray-600 text-sm leading-relaxed flex-1">
              Effortlessly manage file status, track versions, and secure sign-offs.
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="flex w-full">
          <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <Image
              src="/images/versions_new.png"
              alt="Visual First Version Control & Comparison"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile CTA Section
function MobileCtaSection() {
  return (
    <div className="bg-white flex flex-col w-full px-4 py-12">
      <div className="bg-gray-50 flex flex-col gap-6 w-full p-6 rounded-2xl">
        <div className="flex flex-col gap-4 w-full text-center">
          <h2 className="font-semibold text-gray-900 text-xl leading-tight">
            Join our beta program
          </h2>
          <p className="font-normal text-gray-600 text-base leading-relaxed">
            And be among the first to shape the future of design collaboration.
          </p>
        </div>
        <div className="flex w-full">
          <JoinUsForm type="beta" />
        </div>
      </div>
    </div>
  );
}

// Mobile Testimonial Section
function MobileTestimonialSection() {
  return (
    <div className="bg-white flex flex-col w-full px-4 py-12">
      <div className="bg-gray-50 flex flex-col w-full rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="flex w-full">
          <Image 
            src="/images/larah_testimonial.png" 
            alt="Larah Biondo Testimonial" 
            width={400} 
            height={300} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-6 w-full p-6">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-1 items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <blockquote className="font-medium text-gray-900 text-lg leading-relaxed text-center">
              "Trazo will save us over 400 hours of work this year. Can’t wait to focus more on designing instead of juggling design files over email or text, and wasting time digging for them in cluttered communication channels."
            </blockquote>
          </div>
          <div className="flex flex-col gap-1 w-full text-center">
            <div className="font-semibold text-gray-900 text-base">
              — Larah Biondo
            </div>
            <div className="font-normal text-gray-600 text-sm">
              Senior Interior Designer, Design Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Newsletter CTA Section
function MobileNewsletterCtaSection() {
  return (
    <div className="bg-gray-50 flex flex-col w-full px-4 py-12">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full text-center">
          <h2 className="font-semibold text-gray-900 text-xl leading-tight">
            Sign up for our newsletter
          </h2>
          <p className="font-normal text-gray-600 text-base leading-relaxed">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>
        <div className="flex w-full">
          <JoinUsForm type="newsletter" />
        </div>
      </div>
    </div>
  );
}

// Mobile Footer
function MobileFooter() {
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
    <div className="bg-gray-900 flex flex-col w-full px-4 py-12 gap-8">
      {/* Logo */}
      <div className="flex justify-center w-full">
        <Image 
          src="/images/full_logo_white_nobg.png" 
          alt="Logo" 
          width={120} 
          height={120} 
          className="w-24 h-auto"
        />
      </div>

      {/* Footer Links */}
      <div className="flex flex-col gap-8 w-full">
        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="font-semibold text-gray-400 text-sm">
              {column.heading}
            </div>
            <div className="flex flex-col gap-3 w-full">
              {column.links.map((link, linkIndex) => (
                <div key={linkIndex} className="font-normal text-gray-500 text-sm">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Version Link */}
      <div className="flex justify-center w-full">
        <Link 
          href="/" 
          className="font-normal text-purple-400 text-sm hover:text-purple-300 underline"
        >
          View Desktop Version
        </Link>
      </div>

      {/* Copyright */}
      <div className="flex w-full pt-8 border-t border-gray-700">
        <div className="font-normal text-gray-400 text-sm text-center w-full">
          © 2025 Trazo, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default function MobilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MobileHeroHeaderSection />
      <MobileFeaturesSection />
      <MobileTestimonialSection />
      <MobileCtaSection />

      <MobileNewsletterCtaSection />
      <MobileFooter />
    </div>
  );
}
