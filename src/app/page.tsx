'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export default function Home() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WXG6HBGT',
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="fixed px-8 md:px-16 md:py-8 py-6 z-10 w-[94%] md:w-[98%] mt-4 items-center justify-between flex bg-[#C2FCF8] rounded-[40px]">
        <Image
          src="/logo.svg"
          alt="Info Drops logo"
          width={100}
          height={24}
          priority
        />
        <a
          className="flex gap-2 items-center bg-white w-fit py-[4px] pr-[18px] pl-[6px] md:py-[7px] rounded-full"
          href="https://getwaitlist.com/waitlist/17866"
          id="waitlist-link"
        >
          <div className="p-2 bg-teal-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4 text-teal-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>

          <p className="text-[#010101] font-semibold md:text-lg text-sm">
            Sign Up Now
          </p>
        </a>
      </div>

      <div className="flex-col justify-center w-[94%] md:w-[98%] min-h-[800px] mt-4 bg-[#C2FCF8] rounded-[40px] pt-24 md:pt-28 overflow-hidden">
        <div className="flex-row justify-center align-middle w-full px-12 md:px-16">
          <div className="max-w-full border-t border-white"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full px-12 pt-6 md:mt-10 mt-5">
          <div className="flex min-w-fit gap-8 justify-center">
            <div className="hidden md:flex">
              <Image
                src="/options.png"
                alt="Options"
                width={86}
                height={24}
                priority
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex w-full justify-center md:justify-start">
                <Image
                  src="/informational-freedom.png"
                  alt="Informational Freedom"
                  width={256}
                  height={24}
                  priority
                />
              </div>
              <h1 className="text-[#010101] font-semibold text-4xl md:text-7xl mt-[30px] text-center md:text-left max-w-[32rem]">
                Stay Informed, Stay Ahead
              </h1>
              <p className="text-teal-950 mt-4 text-xl text-center md:text-left max-w-[32rem]">
                Daily AI-generated newsletters tailored to your interests,
                delivered straight to your WhatsApp.
              </p>
              <a
                className="flex w-fit gap-2 mt-[36px] mb-4 bg-white pr-[18px] pl-[6px] py-[7px] rounded-full"
                href="https://getwaitlist.com/waitlist/17866"
                id="waitlist-link"
              >
                <div className="p-2 bg-teal-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 text-teal-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                <p className="text-[#010101] font-semibold text-lg">
                  Get Early Access
                </p>
              </a>
              <Image
                src="/no-cc.png"
                alt="No Credit Card Required"
                width={142}
                height={24}
                priority
                className="w-["
              />
            </div>
          </div>
          <div className="flex w-full relative">
            <div className="hidden lg:flex absolute min-w-[100%] md:left-[280px] md:bottom-[-280px] sm:left-0 sm:bottom-0">
              <Image
                src="/phone1.png"
                alt="Iphone with WhatsApp open"
                width={477}
                height={24}
                priority
              />
            </div>
            <div className="absolute min-w-[100%] lg:left-[-100px] lg:bottom-[-440px] md:left-[150px] md:bottom-[-580px]">
              <Image
                src="/phone2.png"
                alt="Iphone with WhatsApp open"
                width={432}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Image
          src="/tags.png"
          alt="AI News Aggregator and Summarizer, integrated to WhatsApp"
          width={966}
          height={24}
          priority
          className="hidden md:block"
        />
        <Image
          src="/tags-vertical.png"
          alt="AI News Aggregator and Summarizer, integrated to WhatsApp"
          width={180}
          height={24}
          priority
          className="md:hidden"
        />
      </div>

      <div className="flex-col justify-center w-[94%] md:w-[98%] min-h-[600px] bg-[#010101] rounded-[40px] pt-10 md:pt-20 mt-[60px] overflow-hidden relative">
        <div className="w-full h-full absolute top-[-200px] flex align-top justify-center resize-none">
          <Image
            src="/circles.png"
            alt="Circles"
            width={1100}
            height={24}
            priority
            className="hidden lg:block"
          />
        </div>

        <div className="flex-row w-full">
          <div className="w-full px-20">
            <h1 className="text-white font-semibold text-4xl md:text-7xl mt-[30px] text-center md:text-left max-w-[32rem]">
              The Information Overload Problem
            </h1>
            <p className="text-white opacity-75 mt-4 text-xl text-center md:text-left max-w-[32rem]">
              Time-consuming research, unreliable sources, and information
              clutter can hinder your growth.
            </p>
          </div>
          <div className="flex md:flex-row md:items-baseline flex-col items-center gap-4 mt-14 px-10 mb-8">
            <div className="flex bg-[#09090A] p-2 rounded-[40px] md:w-fit border border-[#1F2022] w-full">
              <div className="flex flex-col gap-2 bg-[#151516] rounded-[30px] p-6 md:w-fit w-full text-center md:text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white self-center md:self-start"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <p className="font-semibold">
                  Information overload and fragmented resources
                </p>
                <p className="opacity-70 font-normal">
                  Cut through the noise with streamlined, relevant updates
                  tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex bg-[#09090A] p-2 rounded-[40px] md:w-fit border border-[#1F2022] w-full">
              <div className="flex flex-col gap-2 bg-[#151516] rounded-[30px] p-6 md:w-fit w-full text-center md:text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white self-center md:self-start"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="font-semibold">
                  Time-consuming and ineffective information gathering
                </p>
                <p className="opacity-70 font-normal">
                  Save valuable time with concise, actionable insights delivered
                  directly to your WhatsApp.
                </p>
              </div>
            </div>
            <div className="flex bg-[#09090A] p-2 rounded-[40px] md:w-fit border border-[#1F2022] w-full">
              <div className="flex flex-col gap-2 bg-[#151516] rounded-[30px] p-6 md:w-fit w-full text-center md:text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white self-center md:self-start"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>

                <p className="font-semibold">
                  Misinformation and biased content
                </p>
                <p className="opacity-70 font-normal">
                  Trustworthy information for critical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center w-[94%] md:w-[98%] min-h-[600px] bg-white rounded-[40px] pt-20 mt-[30px] overflow-hidden">
        <div className="flex-row w-full">
          <div className="w-full px-20">
            <div className="w-full flex md:justify-start justify-center">
              <Image
                src="/hiw.png"
                alt="How It Works"
                width={137}
                height={24}
                priority
                className=""
              />
            </div>
            <h1 className="text-[#010101] font-semibold text-4xl md:text-7xl mt-[30px] text-center md:text-left max-w-[32rem]">
              Cut Through the Noise, Save Time, and Stay Informed
            </h1>
            <p className="text-[#010101] opacity-75 mt-4 text-xl text-center md:text-left max-w-[32rem]">
              Our AI generates daily newsletters from credible sources,
              delivered directly to your WhatsApp.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between mt-16 px-12 mb-8 gap-5 md:gap-3 ">
            <div className="flex flex-col w-full h-fit bg-[#EFFFFE] pb-6 rounded-[40px] border border-[#C2FCF8] overflow-hidden">
              <div className="w-full flex justify-end">
                <Image
                  src="/onboard.png"
                  alt="Example of Onboarding a New User"
                  width={432}
                  height={24}
                  priority
                  className=""
                />
              </div>
              <div className="w-full px-6">
                <p className="text-[#010101] font-normal mt-4">1 -</p>
                <p className="text-[#010101] text-[20px] font-semibold">
                  Select Your Interests
                </p>
                <p className="text-[#010101] opacity-50 font-normal text-lg">
                  Tell us what your interests, how you want to get your drops
                  and how often.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full h-fit bg-[#EFFFFE] pb-6 rounded-[40px] border border-[#C2FCF8] overflow-hidden">
              <div className="w-full flex justify-center pt-8">
                <Image
                  src="/wsconfirm.png"
                  alt="Example of InfoDrops WhatsApp message"
                  width={339}
                  height={24}
                  priority
                  className=""
                />
              </div>
              <div className="w-full px-6 mt-[-4.75rem]">
                <p className="text-[#010101] font-normal">2 -</p>
                <p className="text-[#010101] text-[20px] font-semibold">
                  Add your WhatsApp Number
                </p>
                <p className="text-[#010101] opacity-50 font-normal text-lg">
                  Tell us what your interests, how you want to get your drops
                  and how often.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full h-fit bg-[#EFFFFE] pb-6 rounded-[40px] border border-[#C2FCF8] overflow-hidden">
              <div className="w-full flex justify-center  mb-8">
                <Image
                  src="/message.png"
                  alt="Example of InfoDrops WhatsApp message"
                  width={382}
                  height={24}
                  priority
                  className=""
                />
              </div>
              <div className="w-full px-6">
                <p className="text-[#010101] font-normal">3 -</p>
                <p className="text-[#010101] text-[20px] font-semibold">
                  Receive Your Daily Infodrops
                </p>
                <p className="text-[#010101] opacity-50 font-normal text-lg">
                  Let us work to get you the most relevant news and insights, in
                  the quickest to consume format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#C1FCF7] flex-col justify-center w-full min-h-[600px] pt-10 pb-12 overflow-hidden">
        <div className="flex-row w-full">
          <div className="flex flex-col w-full px-14 md:px-20 items-center md:items-start">
            <h1 className="text-[#010101] font-semibold text-4xl md:text-7xl mt-[30px] text-center md:text-left max-w-[52rem]">
              Ready to Transform How You Stay Informed?
            </h1>
            <p className="text-[#010101] opacity-75 mt-4 text-xl text-center md:text-left max-w-[52rem]">
              Join our early access program and be the first to experience the
              future of information curation. Sign up now and take the first
              step towards smarter decision-making.
            </p>
            <Image
              src="/tags-white.png"
              alt="AI News Aggregator and Summarizer, integrated to WhatsApp"
              width={780}
              height={24}
              priority
              className="mt-8 hidden md:block"
            />
            <a
              className="flex w-fit gap-2 mt-[36px] mb-4 bg-white pr-[18px] pl-[6px] py-[7px] rounded-full"
              href="https://getwaitlist.com/waitlist/17866"
              id="waitlist-link"
            >
              <div className="p-2 bg-teal-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 text-teal-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              <p className="text-[#010101] font-semibold text-lg">
                Sign Up for Early Access
              </p>
            </a>
            <Image
              src="/no-cc.png"
              alt="No Credit Card Required"
              width={142}
              height={24}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full mt-16 bg-white/[0.18] h-[120px]">
          <div className="flex-row justify-center align-middle w-full px-[3rem] md:px-[5rem]">
            <div className="max-w-full border-t border-white"></div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-start items-center md:gap-6 gap-2 px-[3rem] md:px-[5rem]">
            <p className="font-bold text-xl text-[#010101]">Social</p>
            <div className="flex flex-row gap-2">
              <a
                className="px-3 py-2 bg-white/[0.4] rounded-full border border-white text-[#010101] font-medium"
                href="https://www.instagram.com/infodrops.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <button className="px-3 py-2 bg-white/[0.4] rounded-full border border-white text-[#010101] font-medium">
                X
              </button>
              <a
                className="px-3 py-2 bg-white/[0.4] rounded-full border border-white text-[#010101] font-medium"
                href="https://www.reddit.com/user/infodrops/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
              <button className="px-3 py-2 bg-white/[0.4] rounded-full border border-white text-[#010101] font-medium">
                Discord
              </button>
            </div>
          </div>
          <div className="flex-row justify-center align-middle w-full px-[3rem] md:px-[5rem]">
            <div className="max-w-full border-t border-white"></div>
          </div>
        </div>
        <div className="flex w-full px-10 md:px-20 justify-between mt-8">
          <p className="text-[#010101]/[0.7]">
            Copyright © 2024 Infodrops Inc.
          </p>
          <div className="flex md:gap-4 gap-0">
            <p className="text-[#010101]/[0.7]">Terms & Conditions</p>
            <p className="text-[#010101]/[0.7]">Privacy Policy</p>
          </div>
        </div>
      </div>
    </main>
  )
}
