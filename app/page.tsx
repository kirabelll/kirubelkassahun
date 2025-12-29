"use client";

import Image from "next/image";
import Link from "next/link";
import image1  from '../public/kirabel.jpg'
import img1 from '../public/frappe-screen.png'
import img2 from '../public/webscreen.png'
import img3 from '../public/zktlogo.png'
import adeyimage from '../public/adey.jpg'
import adeyapi from '../../public/apiadey.png'
import nelliys from '../public/Nellys-01.png'
import ecoimage from '../../public/ecoimage.jpg'
import travelapi from '../../public/travelapi.jpg'
import devel from '../public/developer.jpg'
import devel2 from '../public/develoer2.jpg'

export default function Home() {
  return (
    <div className="relative sm:px-8 lg:px-12 max-w-7xl mr-auto ml-auto pr-5 pl-5">
      {/* Header */}
      <header className="pt-6 sm:pt-8 fade-in-up animate">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
          <div className="flex items-center justify-between sm:justify-start">
            <span className="sm:text-base text-sm font-semibold tracking-tight cursor-pointer">
              KIRUBEL
            </span>
          </div>
          <div className="col-start-3 flex flex-col items-end text-right">
            <span className="text-xs font-semibold tracking-tight">
              Based in Ethiopia
            </span>
            <span className="text-[13px] text-black/70">
              Creative Thinker & Interface Builder
            </span>
          </div>
        </div>
        <div className="mt-5 border-t border-black/15"></div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 sm:py-12 pt-8 pb-8 items-start">
          <div className="lg:col-span-7 fade-in-left animate">
            <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] font-semibold tracking-tight">
              <span className="block">Innovative by Code.</span>
              <span className="block">Efficient by Logic.</span>
              <span className="block">Exceptional by Architecture.</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
                View My Work
              </button>
              <button className="text-lg border border-gray-400 px-8 py-3 rounded-full bg-gray-50 font-bold text-[15px] text-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 fade-in-right animate">
            <div className="relative rounded-2xl overflow-hidden ring-1 shadow-2xl ring-black/10 bg-black/5">
              <Image
                src={image1}
                alt="Editorial motion"
                width={800}
                height={600}
                className="sm:h-[340px] lg:h-[360px] w-full h-[280px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Rail */}
        <div className="-mt-1 relative mb-8 sm:mb-12 lg:mb-16 fade-in-up animate">
          <div className="relative">
            <div className="sm:h-12 flex sm:px-6 text-white bg-black w-full h-10 rounded-sm pr-4 pl-4 items-center justify-between">
              <div className="w-full grid grid-cols-3 text-[13px] sm:text-sm font-medium">
                <Link
                  href="/work"
                  className="flex items-center justify-center cursor-pointer"
                >
                  Work
                </Link>
                <Link
                  href="/process"
                  className="flex border-x border-white/20 items-center justify-center cursor-pointer"
                >
                  Process
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giant Name Section */}
      <section className="relative sm:py-12 lg:py-16 pt-10 pb-10 fade-in-up animate">
        <div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
          <span className="sm:text-6xl text-4xl font-semibold tracking-tight">
            SOFTWARE DEVELOPER
          </span>
        </div>
        <div className="overflow-hidden">
          <h2
            className="leading-[0.9] select-none font-semibold tracking-tight pt-10"
            style={{ fontSize: "clamp(68px, 17vw, 260px)" }}
          >
            KIRUBEL
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="ssm:py-24 pt-16 pb-16">
        <div className="mb-12 fade-in-up animate">
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
                <span>ABOUT</span>
                <span>(01)</span>
              </div>
              <div className="mt-2 h-px w-full bg-black"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
              <div className="lg:col-span-7 fade-in-left animate">
                <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight uppercase">
                  Recent Work.
                </h3>
              </div>

              <div className="lg:col-span-5 fade-in-right animate">
                <p className="text-base sm:text-lg text-black/60 max-w-2xl mt-0 mx-0 mb-6">
                  A curated set of projects from the past months. Clean code,
                  scalable architecture, and efficient solutions. Built with modern
                  frameworks and optimized for performance.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </span>
                    <span className="px-3 text-sm font-medium">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 fade-in-left animate">
            <div className="w-full h-[360px] rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gray-50 mb-6">
              <Image
                src= {image1}
                alt="Portrait"
                width={400}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-8 fade-in-right animate">
            <div className="space-y-6 text-lg leading-relaxed text-black/70">
              <p>
                I&apos;m a Software Developer who believes in the power of clean code.
                My approach is rooted in understanding technical requirements deeply and
                crafting solutions that are scalable, maintainable, and performant.
              </p>
              <p>
                With over 3 years of experience building applications for
                startups and corporate companies, I&apos;ve learned that the best code is
                often the one you don't notice – it just works.
              </p>
              <p>
                When I&apos;m not coding, you'll find me exploring new tech stacks,
                reading about software architecture, or contributing to open
                source projects
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="scale-in stagger-delay-1 animate">
                <div className="text-3xl font-semibold tracking-tight">10+</div>
                <div className="text-sm mt-1 text-black/70">
                  Projects Completed
                </div>
              </div>
              <div className="scale-in stagger-delay-2 animate">
                <div className="text-3xl font-semibold tracking-tight">3</div>
                <div className="text-sm mt-1 text-black/70">
                  Years Experience
                </div>
              </div>
              <div className="scale-in stagger-delay-3 animate">
                <div className="text-3xl font-semibold tracking-tight">5+</div>
                <div className="text-sm mt-1 text-black/70">Happy Clients</div>
              </div>
              {/* <div className="scale-in stagger-delay-4 animate">
                <div className="text-3xl font-semibold tracking-tight">3</div>
                <div className="text-sm mt-1 text-black/70">Design Awards</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="ssm:py-24 pt-16 pb-16">
        <div className="text-center mb-12 fade-in-up animate">
          <div className="mb-6">
            <div className="flex text-[13px] sm:text-sm uppercase font-medium text-black tracking-tight items-center justify-between">
              <span className="">WORK</span>
              <span className="">(02)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
            <div className="lg:col-span-7 fade-in-left animate">
              <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
                Recent work.
              </h3>
            </div>

            <div className="lg:col-span-5 fade-in-right animate">
              <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
                  Production-ready applications showcasing enterprise-grade development. 
                  Microservices architecture, CI/CD pipelines, and robust API design. 
                  Built with TypeScript, Python, and cloud-native technologies
              </p>
              <div className="flex justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </span>
                  <span className="px-3 text-sm font-medium">Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-1 animate">
            <div className="w-full bg-gray-50">
              <Image
                src={img1}
                alt="FinFlow Banking App"
                width={800}
                height={240}
                className="w-full h-[220px] sm:h-[240px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                ERP
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                Enterprise Resource Planning (Frappe)
              </h4>
              <p className="text-black/70 mb-6">
                A comprehensive ERP solution built on Frappe framework that streamlines business operations across multiple departments. 
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  Frappe
                </span>
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  Pyhton
                </span>
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  JavaScript / Vite
                </span>
              </div>
              <Link
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium"
              >
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
          </article>

          <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-2 animate">
            <div className="w-full bg-gray-50">
              <Image
                src={img3}
                alt="TaskFlow Dashboard"
                width={800}
                height={240}
                className="w-full h-[220px] sm:h-[240px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                intergration
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                Intergrate ZKtBio Time Attendance With ERPNext
              </h4>
              <p className="text-black/70 mb-6">
                Seamless integration of ZKTeco biometric devices with ERPNext for automated attendance tracking and payroll processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                 Python
                </span>
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  Shell
                </span>
              </div>
              <Link
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium"
              >
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
          </article>

          <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white fade-in-up stagger-delay-3 animate">
            <div className="w-full bg-gray-50">
              <Image
                src={nelliys}
                alt="Minimal Store"
                width={800}
                height={240}
                className="w-full h-[220px] sm:h-[240px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">
                Web apps
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Nelliys order on top of ERPNext
              </h4>
              <p className="text-black/70 mb-6">
                A distraction‑free shop that makes browsing effortless and
                checkout instant.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  Python
                </span>
                <span className="px-2 py-1 text-xs rounded bg-black/5">
                  Vite-TypeScript
                </span>
              </div>
              <Link
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium"
              >
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="sm:py-24 pt-16 pb-16">
        <div className="text-center mb-12 fade-in-up animate">
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span className="">APPROACH</span>
              <span className="">(03)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
            <div className="lg:col-span-7 fade-in-left animate">
              <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
                Why Work With Me.
              </h3>
            </div>

            <div className="lg:col-span-5 fade-in-right animate">
              <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
                Designer who codes. I turn ideas into clear structure, then into
                working UI. Fast delivery, clean visuals, and components that
                are easy to ship.
              </p>
              <div className="flex justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </span>
                  <span className="px-3 text-sm font-medium">Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 fade-in-left animate">
            <article className="relative overflow-hidden rounded-2xl ring-1 ring-black/10 bg-gray-50">
              <Image
                src={devel2}
                alt="Designer workspace with minimal setup"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.55) 70%)",
                }}
              ></div>
              <div className="relative p-6 sm:p-8 h-[320px] sm:h-[420px] flex flex-col justify-between">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Lazy by Design, Exceptional by Nature.
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">
                    My working philosophy
                  </span>
                  <button
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black text-sm font-semibold px-5 py-2 backdrop-blur transition"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.08)" }}
                  >
                    Let&apos;s collaborate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            <article className="flex-grow bg-white ring-black/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
              <h4 className="text-lg font-semibold tracking-tight mb-4">
                My Working Principles
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 fade-in-up stagger-delay-1 animate">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: "rgb(250, 112, 250)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Quality Over Quantity</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up stagger-delay-2 animate">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 border-pink-400/20 border-2 rounded-full mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: "rgb(250, 112, 250)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Honest Communication</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up stagger-delay-3 animate">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 border-pink-400/20 border-2 rounded-full mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: "rgb(250, 112, 250)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m13 2-2 2.5h-3L6 2v3.5L4 8v6l2 2.5V20h4v-3.5L12 14h3l2 2.5V20h1v-4l-2-2.5V8L14 5.5V2h-1z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">User-First Mindset</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up stagger-delay-4 animate">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: "rgb(250, 112, 250)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8L21 8h-9l1-6z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Efficient Execution</span>
                </li>
                <li className="flex items-start gap-3 fade-in-up stagger-delay-5 animate">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink-400/20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(250, 112, 250, 0.1), rgba(250, 112, 250, 0.05))",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      style={{ color: "rgb(250, 112, 250)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span className="font-medium">Results That Last</span>
                </li>
              </ul>
            </article>
          </div>

          {/* Middle column: client testimonial */}
          <article
            className="relative ring-1 ring-black/10 overflow-hidden flex flex-col lg:min-h-[600px] bg-white h-full bg-cover rounded-2xl bg-center fade-in-up animate"
            style={{
             backgroundImage: `url(${devel.src})`,
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -bottom-24 w-[520px] h-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(250, 112, 250, 0.08), rgba(250, 112, 250, 0.02) 60%, transparent 61%)",
              }}
            ></div>

            {/* Top row */}
            <div className="flex sm:p-8 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
              <div className="flex -space-x-2">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/054cd9f9-ea66-4ac7-8e45-659730cfc5a3_320w.jpg"
                  alt="Happy client 1"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_320w.jpg"
                  alt="Happy client 2"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                  alt="Happy client 3"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&fit=crop&crop=faces"
                  alt="Happy client 4"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
              </div>
              <div className="text-sm text-black/70 inline-flex items-center gap-1">
                5.0/5
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  style={{ color: "rgb(250, 112, 250)" }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </div>
            </div>

            <div className="sm:px-8 sm:pb-8 flex-grow flex flex-col pr-6 pb-6 pl-6 justify-between">
              <div className="">
                <div
                  className="mb-4 flex items-center gap-1"
                  style={{ color: "rgb(250, 112, 250)" }}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={devel}
                    alt="Maya Chen"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="">
                    <div className="text-sm font-semibold">Maya Chen</div>
                    <div className="text-xs text-black/70">
                      Product Lead — TechFlow
                    </div>
                  </div>
                </div>
                <div className="text-sm text-black/70 font-medium">
                  Trusted by 100+ forward-thinking companies
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6 lg:min-h-[600px] fade-in-right animate h-full">
            <article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div
                className="relative flex flex-col h-full bg-cover pt-6 pr-6 pb-6 pl-6 justify-end"
                style={{
                  backgroundImage: `url(${devel2.src})`,
                }}
              >
                <h4 className="text-xl font-semibold text-white tracking-tight mb-2">
                  Direct Communication
                </h4>
                <p className="text-sm text-white/80">
                  Skip the middleman. You work directly with me, ensuring your
                  vision stays intact from concept to completion.
                </p>
              </div>
            </article>

            <article className="flex-1 relative overflow-hidden bg-white ring-black/10 ring-1 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div
                className="relative flex flex-col h-full bg-cover pt-6 pr-6 pb-6 pl-6 justify-end"
                style={{
                     backgroundImage: `url(${devel2.src})`,
                }}
              >
                <h4 className="text-xl font-semibold tracking-tight mb-2 text-white">
                  Strategic Thinking
                </h4>
                <p className="text-sm text-white/80">
                  Every design decision is backed by purpose. I solve real
                  problems, not just make things look pretty.
                </p>
              </div>
            </article>

            <article className="rounded-2xl ring-1 ring-black/10 bg-white flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div
                className="relative flex flex-col h-full bg-cover pt-6 pr-6 pb-6 pl-6 justify-end"
                style={{
                     backgroundImage: `url(${devel2.src})`,
                }}
              >
                <h4 className="text-xl font-semibold tracking-tight mb-2 text-white">
                  Long-term Partnership
                </h4>
                <p className="text-sm text-white/80">
                  I build relationships, not just projects. Many clients return
                  because they know the value of working together.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sm:py-24 pt-16 pb-16">
        <div className="mb-12">
          <div className="text-center mb-12 fade-in-up animate">
            <div className="mb-6">
              <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
                <span className="">PROOF</span>
                <span className="">(04)</span>
              </div>
              <div className="mt-2 h-px w-full bg-black"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
              <div className="lg:col-span-7 fade-in-left animate">
                <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight">
                  What Clients Says.
                </h3>
              </div>

              <div className="lg:col-span-5 fade-in-right animate">
                <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto mb-6 ml-0">
                  What our clients say about working with us. Real feedback from
                  real partnerships that drive exceptional results.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </span>
                    <span className="px-3 text-sm font-medium">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 fade-in-up animate">
          <div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
            <div className="flex gap-2 mb-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
              </svg>
            </div>
            <div className="flex items-center gap-1 mb-4 text-white">
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
            </div>
            <p className="text-base leading-relaxed mb-6">
              Kirubel transformed our ERP system beyond what we imagined.
              Professional, technical, and delivered on time. Our business processes
              have never been more efficient
            </p>
            <div className="flex items-center justify-between">
              <div className="">
                <div className="text-sm font-medium">Matiyas Tesfaye</div>
                <div className="text-xs mt-1 text-white/70">
                  ERP Specialist
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces"
                alt="Emma Collins"
                width={32}
                height={32}
                className="w-8 h-8 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="relative overflow-hidden text-black bg-white pt-6 pr-6 pb-6 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&h=64&fit=crop&crop=faces"
                alt="Michael Brooks"
                width={24}
                height={24}
                className="w-6 h-6 object-cover rounded-full"
              />
              <div className="">
                <div className="text-sm font-medium">KalKadin Gebeyew</div>
                <div className="text-xs text-black/70">IT Head , Taf Energis</div>
              </div>
            </div>
            <div className="flex gap-1 text-black mb-4 items-center">
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  className=""
                ></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
            </div>
            <p className="leading-relaxed relative z-10 text-base">
              Working with Sakura was incredible. The sleek design resonates
              with customers and has greatly improved our user experience since
              launch.
            </p>
          </div>

          <div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
              </svg>
            </div>
            <div className="flex items-center gap-1 mb-4 text-white">
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
            </div>
            <p className="text-base leading-relaxed mb-6">
              From strategy to launch, Sakura was with us every step. Their
              creativity and expertise helped us stand out in a crowded market.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Emily Harris</div>
                <div className="text-xs mt-1 text-white/70">CEO, Boltshift</div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&h=64&fit=crop&crop=faces"
                alt="Emily Harris"
                width={32}
                height={32}
                className="w-8 h-8 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="lg:col-span-3 border-t border-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              <div className="text-white bg-black border-black/10 border-r pt-6 pr-6 pb-6 pl-6 scale-in stagger-delay-1 animate">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                  4.6s
                </div>
                <div className="text-xs text-white/70">
                  Average page load time across projects
                </div>
              </div>
              <div className="p-6 border-r bg-black text-white border-black/10 scale-in stagger-delay-2 animate">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                  18+
                </div>
                <div className="text-xs text-white/70">
                  Countries where our designs are used
                </div>
              </div>
              <div className="p-6 bg-black text-white scale-in stagger-delay-3 animate">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                  100%
                </div>
                <div className="text-xs text-white/70">
                  Delivery Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:py-24 pt-16 pb-16">
        <div className="text-center mb-12 fade-in-up animate">
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
              <span className="">FOCUS</span>
              <span className="">(05)</span>
            </div>
            <div className="mt-2 h-px w-full bg-black"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
            <div className="lg:col-span-7 fade-in-left animate">
              <h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] font-semibold tracking-tight uppercase">
                Clean UI. Built Fast.
              </h3>
            </div>

            <div className="lg:col-span-5 fade-in-right animate">
              <p className="sm:text-lg text-black/60 max-w-3xl mt-0 mr-auto ml-0 mb-6">
                Designer who codes. Dashboards, landing pages, and design
                systems delivered in React and Tailwind.
              </p>
              <div className="flex justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 ring-1 ring-black/10 hover:shadow-2xl transition bg-black/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </span>
                  <span className="px-3 text-sm font-medium">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 perspective-distant">
          <div className="flex gap-5 sm:gap-8 overflow-x-auto overflow-y-visible sm:px-0 transform-style-preserve-3d select-none pr-2 pb-6 pl-2 items-end justify-start min-w-full">
            <article
              className="relative rounded-3xl fade-in-up stagger-delay-1 animate"
              style={{
                transform: "rotate(-4deg) translateY(16px)",
              }}
            >
              <Image
                src={img1}
                alt="Studio product on dark silk"
                width={340}
                height={520}
                className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-0 rounded-3xl"
              />
            </article>

            <article
              className="relative rounded-3xl fade-in-up stagger-delay-2 animate"
              style={{
                transform: "rotate(-2.5deg) translateY(10px)",
              }}
            >
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9ab83c55-bb01-43d7-b04c-23f9c4a252e4_800w.jpg"
                alt="Close-up of a luxury car front"
                width={340}
                height={520}
                className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]"
              />
            </article>

            <article
              className="relative rounded-3xl fade-in-up stagger-delay-3 animate"
              style={{
                transform: "rotate(0deg) translateY(0px) scale(1.01)",
              }}
            >
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6048d1c9-122b-4335-877b-965b2b899516_800w.jpg"
                alt="Portrait partially submerged in water"
                width={340}
                height={520}
                className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]"
              />
            </article>

            {/* Card 4 */}
            <article
              className="relative rounded-3xl fade-in-up stagger-delay-4 animate"
              style={{
                transform: "rotate(2.5deg) translateY(10px)",
              }}
            >
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9eccc5e3-286c-44fb-ba83-90f953c8c783_800w.jpg"
                alt="Wine bottle in soft studio drape"
                width={340}
                height={520}
                className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] w-[240px] h-[420px] object-cover ring-black/10 ring-1 rounded-[28px]"
              />
            </article>

            {/* Card 5 */}
            <article
              className="relative rounded-3xl fade-in-up stagger-delay-5 animate"
              style={{
                transform: "rotate(5deg) translateY(16px)",
              }}
            >
              <Image
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a936bc9-9869-496e-89c2-32bb97b4aea4_800w.jpg"
                alt="Studio portrait in warm light"
                width={340}
                height={520}
                className="sm:w-[300px] lg:w-[340px] sm:h-[480px] lg:h-[520px] ring-black/10 ring-1 w-[240px] h-[420px] object-cover rounded-[28px]"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="sm:py-16 border-black/10 border-t pt-12 pb-0 fade-in-up animate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">
              Have any project idea? Contact Kirubel
            </h3>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2 flex items-center justify-center"
              >
                Contact Now
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="fade-in-up stagger-delay-1 animate">
              <div className="text-sm font-semibold tracking-tight mb-3">
                Main Pages
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="">
                  <a href="#" className="hover:text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="fade-in-up stagger-delay-2 animate">
              <div className="text-sm font-semibold tracking-tight mb-3">
                Utility Pages
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="">
                  <a href="#" className="hover:text-black">
                    Licenses
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-black">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>
            <div className="fade-in-up stagger-delay-3 animate">
              <div className="text-sm font-semibold tracking-tight mb-3">
                More Pages
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="">
                  <a href="#" className="hover:text-black">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Blog
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="fade-in-up stagger-delay-4 animate">
              <div className="text-sm font-semibold tracking-tight mb-3">
                Socials
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="">
                  <a href="#" className="hover:text-black">
                    Instagram
                  </a>
                </li>
                <li className="">
                  <a href="#" className="hover:text-black">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 mt-10 pt-6">
          <p className="text-center text-black/70 text-sm">
            © 2025 KIRUBEL. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
