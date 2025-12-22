"use client";

import React from "react";
import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="relative sm:px-8 lg:px-12 max-w-7xl mr-auto ml-auto pr-5 pl-5">
      <header className="pt-6 sm:pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
          <div className="flex items-center justify-between sm:justify-start">
            <Link
              href="/"
              className="sm:text-base cursor-pointer text-sm font-semibold tracking-tight"
            >
              KIRUBEL
            </Link>
          </div>

          <div className="col-start-3 flex flex-col items-end text-right">
            <span className="text-xs font-semibold tracking-tight">
              Based in Ethiopia
            </span>
            <span className="text-[13px] text-black/70">
              Creative Thinker &amp; Interface Builder
            </span>
          </div>
        </div>
        <div className="mt-5 border-t border-black/15"></div>
      </header>

      <section className="relative">
        <div className="sm:py-12 pt-8 pb-8">
          <div className="mb-6">
            <span className="text-black/70 text-sm">/Process</span>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] font-semibold tracking-tight mb-6">
            How I Approach Every Project
          </h1>

          <p className="text-lg sm:text-xl text-black/70 max-w-3xl leading-relaxed mb-8">
            A refined methodology built through years of experience, ensuring
            every project is delivered with intention, precision, and measurable
            results.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">
              4 Core Phases
            </span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">
              Collaborative
            </span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">
              User-Centered
            </span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">
              Results-Driven
            </span>
          </div>
        </div>

        <div className="relative mb-8 sm:mb-12 lg:mb-16">
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

      <section className="relative sm:py-12 lg:py-16 pt-10 pb-10">
        <div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
          <span className="sm:text-6xl text-4xl font-semibold tracking-tight">
            METHOD
          </span>
        </div>

        <div className="overflow-hidden">
          <h2
            className="leading-[0.9] select-none font-semibold tracking-tight"
            style={{ fontSize: "clamp(68px, 17vw, 260px)" }}
          >
            PROCESS
          </h2>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">
            Four Phases to Success
          </h3>
          <p className="text-black/70">
            Each phase builds upon the last, creating a solid foundation for
            exceptional results.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold tracking-tight">
                      01
                    </span>
                    <h4 className="text-2xl font-semibold tracking-tight mt-2">
                      Discovery
                    </h4>
                  </div>
                </div>
                <div className="space-y-4 text-black/70">
                  <p className="text-lg">
                    Understanding your business, users, and market landscape
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Stakeholder interviews &amp; workshops
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      User research &amp; persona development
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Competitive analysis &amp; market positioning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-blue-100 text-blue-800 w-fit">
                Phase 01
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                Deep Discovery
              </h4>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                Every great project starts with understanding. I dive deep into
                your business goals, user needs, and market challenges to
                establish a solid foundation for success.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/70">Duration:</span>
                  <span className="font-medium">1-2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/70">Deliverables:</span>
                  <span className="font-medium">
                    Research findings, user personas, project brief
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-purple-100 text-purple-800 w-fit">
                Phase 02
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                Strategic Planning
              </h4>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                With insights from discovery, I create a comprehensive strategy
                that aligns design decisions with business objectives and user
                expectations.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/70">Duration:</span>
                  <span className="font-medium">1-3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/70">Deliverables:</span>
                  <span className="font-medium">
                    Strategy document, user flows, wireframes
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v6l4-4-4-4"></path>
                      <path d="M17 3v6l4-4-4-4"></path>
                      <path d="M7 3v6l4-4-4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold tracking-tight">
                      02
                    </span>
                    <h4 className="text-2xl font-semibold tracking-tight mt-2">
                      Strategy
                    </h4>
                  </div>
                </div>
                <div className="space-y-4 text-black/70">
                  <p className="text-lg">
                    Translating insights into actionable design strategy
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Information architecture &amp; user flows
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Content strategy &amp; messaging framework
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Technical requirements &amp; constraints
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="m8 12 4 4 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold tracking-tight">
                      03
                    </span>
                    <h4 className="text-2xl font-semibold tracking-tight mt-2">
                      Design
                    </h4>
                  </div>
                </div>
                <div className="space-y-4 text-black/70">
                  <p className="text-lg">
                    Creating beautiful, functional experiences that users love
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Visual design &amp; design systems
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Interactive prototypes &amp; micro-interactions
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      User testing &amp; design refinement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-green-100 text-green-800 w-fit">
                Phase 03
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                Visual Design
              </h4>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                Where strategy meets aesthetics. I craft pixel-perfect designs
                that not only look stunning but solve real user problems and
                drive business results.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/70">Duration:</span>
                  <span className="font-medium">2-4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/70">Deliverables:</span>
                  <span className="font-medium">
                    High-fidelity designs, prototypes, design system
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-orange-100 text-orange-800 w-fit">
                Phase 04
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                Launch &amp; Support
              </h4>
              <p className="text-black/70 mb-6 text-lg leading-relaxed">
                The final phase ensures smooth handoff and successful launch. I
                provide ongoing support to guarantee your project achieves its
                intended impact.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/70">Duration:</span>
                  <span className="font-medium">1-2 weeks + ongoing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/70">Deliverables:</span>
                  <span className="font-medium">
                    Final assets, documentation, training
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold tracking-tight">
                      04
                    </span>
                    <h4 className="text-2xl font-semibold tracking-tight mt-2">
                      Delivery
                    </h4>
                  </div>
                </div>
                <div className="space-y-4 text-black/70">
                  <p className="text-lg">
                    Seamless handoff and successful project launch
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Development handoff &amp; documentation
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Quality assurance &amp; testing support
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                      Post-launch optimization &amp; support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">
            Tools &amp; Methods
          </h3>
          <p className="text-black/70">
            The technology and methodologies that power my process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Design Tools
            </h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Figma &amp; FigJam
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Adobe Creative Suite
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Principle &amp; Framer
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Sketch &amp; InVision
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Research
            </h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                User interviews
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                A/B testing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Analytics review
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Usability testing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Development
            </h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                HTML/CSS/JS
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                React &amp; Next.js
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Webflow &amp; Framer
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                WordPress &amp; Shopify
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Collaboration
            </h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Slack &amp; Discord
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Notion &amp; Airtable
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                Zoom &amp; Loom
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                GitHub &amp; Linear
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="text-center">
          <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight mb-6">
            Ready to start your project?
          </h3>
          <p className="text-lg sm:text-xl text-black/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how my proven process can help bring your vision
            to life with precision and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              Start a Project
            </button>
            <button className="text-lg border border-gray-400 px-8 py-3 rounded-full bg-gray-50 font-bold text-[15px] text-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              View My Work
            </button>
          </div>
        </div>
      </section>

      <section className="sm:py-16 border-black/10 border-t pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">
              Like my process? Let&apos;s work together
            </h3>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">
                Main Pages
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>
                  <Link href="/" className="hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-black">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">
                Process
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Discovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">
                Services
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Branding
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">
                Socials
              </div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Instagram
                  </a>
                </li>
                <li>
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
