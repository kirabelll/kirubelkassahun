import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/frappe-screen.png'
import img2 from '../../public/webscreen.png'
import img3 from '../../public/zktlogo.png'
import adeyimage from '../../public/adey.jpg'
import adeyapi from '../../public/apiadey.png'
import nelliys from '../../public/Nellys-01.png'
import ecoimage from '../../public/ecoimage.jpg'
import travelapi from '../../public/travelapi.jpg'



export default function Work() {
  return (
    <div className="relative sm:px-8 lg:px-12 max-w-7xl mr-auto ml-auto pr-5 pl-5">
      <header className="pt-6 sm:pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
          <div className="flex items-center justify-between sm:justify-start">
            <Link href='/' className="sm:text-base cursor-pointer text-sm font-semibold tracking-tight">KIRUBEL</Link>
          </div>
          <div className="col-start-3 flex flex-col items-end text-right">
            <span className="text-xs font-semibold tracking-tight">Based in Ethiopia</span>
            <span className="text-[13px] text-black/70">Creative Thinker &amp; Interface Builder</span>
          </div>
        </div>  
        <div className="mt-5 border-t border-black/15"></div>
      </header>

      <section className="relative">
        <div className="sm:py-12 pt-8 pb-8">
          <div className="mb-6">
            <span className="text-black/70 text-sm">/Work</span>
          </div>
          
          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] font-semibold tracking-tight mb-6">
            Selected Work &amp; Projects
          </h1>
          
          <p className="text-lg sm:text-xl text-black/70 max-w-3xl leading-relaxed mb-8">
            A curated collection of digital products, brand identities, and user experiences crafted with intention and precision.
          </p>
          
          <div className="flex flex-wrap gap-3 text-sm">
            <button className="px-4 py-2 rounded-full bg-black text-white font-medium">All Projects</button>
            <button className="px-4 py-2 rounded-full bg-black/5 text-black/70 hover:bg-black/10">Web Apps</button>
            <button className="px-4 py-2 rounded-full bg-black/5 text-black/70 hover:bg-black/10">Mobile Apps</button>
            <button className="px-4 py-2 rounded-full bg-black/5 text-black/70 hover:bg-black/10">ERP</button>
            <button className="px-4 py-2 rounded-full bg-black/5 text-black/70 hover:bg-black/10">E-commerce</button>
          </div>
        </div>
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <div className="relative">
            <div className="sm:h-12 flex sm:px-6 text-white bg-black w-full h-10 rounded-sm pr-4 pl-4 items-center justify-between">
              <div className="w-full grid grid-cols-3 text-[13px] sm:text-sm font-medium">
                <a href='/work' className="flex items-center justify-center cursor-pointer">Work</a>
                <a href='/process' className="flex border-x border-white/20 items-center justify-center cursor-pointer">Process</a>
                <a href='/contact' className="flex items-center justify-center cursor-pointer">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative sm:py-12 lg:py-16 pt-10 pb-10">
        <div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
          <span className="sm:text-6xl text-4xl font-semibold tracking-tight">PORTFOLIO</span>
        </div>
        <div className="overflow-hidden">
          <h2 className="leading-[0.9] select-none font-semibold tracking-tight" style={{ fontSize: "clamp(68px, 17vw, 260px)" }}>WORK</h2>
        </div>
      </section>
      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">Featured Projects</h3>
          <p className="text-black/70">My most impactful work across different industries and platforms.</p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gray-50">
                <Image src= {img1} alt="FinFlow Banking App" width={800} height={480} className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-black/5 text-black/70 w-fit">Featured Project</span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Enterprise Resource Planning(Frappe)  </h4> A comprehensive ERP solution built on Frappe framework that streamlines business operations across multiple departments. The system integrates accounting, inventory, HR, and project management into a unified platform, reducing operational overhead by 35% and improving data accuracy across all business processes
              <div className="flex flex-wrap gap-3 mb-8 mt-4">
                <span className="px-3 py-1 text-sm rounded bg-black/5">Frappe HRMS</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">Accunoting</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">CRM</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">Project</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">Assets</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">Buying</span>
                <span className="px-3 py-1 text-sm rounded bg-black/5">Selling</span>

              </div>
              <Link href="https://frappe.io/" className="inline-flex items-center gap-2 text-sm font-medium bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-black/90 transition">
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
              </Link>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={img2} alt="TaskFlow Dashboard" width={800} height={280} className="w-full h-[280px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Web Platform</span>
                <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">TaskFlow Dashboard</h4>
                <p className="text-black/70 mb-6">A lean project management platform that keeps teams aligned with clean visuals and zero fluff. Built for productivity.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Dashboard Design</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Data Visualization</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Frontend Development</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={ecoimage} alt="Minimal Store" width={800} height={280} className="w-full h-[280px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">E‑commerce</span>
                <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">Ethio-Chicken Ecommerce - Backend</h4>
                  A robust e-commerce backend API built with Node.js and MongoDB, featuring secure payment processing, inventory management, and real-time order tracking. Optimized for scalability and performance.
                <div className="flex flex-wrap gap-2 mb-6 mt-3">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">API</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Node-Express-Mongodb</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Postman</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>
          </div>
{/* first project */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={img3} alt="Brand Identity Project" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Integration</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">Intergrate ZKtBio Time Attendance With ERPNext</h4>
                  <p className="text-black/70 mb-6 text-sm"> Seamless integration of ZKTeco biometric devices with ERPNext for automated attendance tracking and payroll processing.</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Python</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Shell</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={adeyimage} alt="Mobile App" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Mobile App</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">AdeyPay</h4>
              <p className="text-black/70 mb-6 text-sm">A secure digital payment wallet app enabling seamless money transfers, bill payments, and mobile top-ups with biometric authentication.</p>
               <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">XML</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">java</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Andriod Studio</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={adeyapi} alt="Website Redesign" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">API Design and Build</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">AdayPay - Backend</h4>
                  <p className="text-black/70 mb-6 text-sm">A robust backend API built with Django and MySQL, featuring secure authentication, payment processing, and comprehensive financial transaction management for the AdeyPay digital wallet platform.</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">API</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Python-Django</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">JWT</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Mysql</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>
          </div>

          {/* additional projects */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={travelapi} alt="Brand Identity Project" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Web Application</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">Natours - Travel Agency</h4>
                    <p className="text-black/70 mb-6 text-sm">A modern travel agency website featuring tour packages, destination guides, and seamless booking experiences with responsive design and intuitive navigation.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">JavaScript-Vite</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Tilwind CSS</span>
                </div>
                
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={img1} alt="Mobile App" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Web Application</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">Letter Mangement System</h4>
                  <p className="text-black/70 mb-6 text-sm">A comprehensive letter management system designed to streamline document workflows, track correspondence, and manage official communications with automated routing and approval processes.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">PHP-Laravel</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">TypeScript-NextJS</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Mysql</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items -center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="w-full bg-gray-50">
                <Image src={nelliys} alt="Website Redesign" width={800} height={200} className="w-full h-[200px] object-cover" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-black/5 text-black/70">Web Application</span>
                <h4 className="text-lg font-semibold tracking-tight mb-3">Nelliys (Restaurant Order Management)</h4>
                  <p className="text-black/70 mb-6 text-sm">A restaurant order management system built as a full-stack application to streamline order processing, kitchen workflows, and customer service operations with real-time updates and inventory tracking.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs rounded bg-black/5">TypeScript-NextJS</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Nodejs-Express</span>
                  <span className="px-2 py-1 text-xs rounded bg-black/5">Postgresql</span>
                </div>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">My Process</h3>
          <p className="text-black/70">How I approach every project from concept to completion.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-semibold">01</span>
            </div>
            <h4 className="text-lg font-semibold tracking-tight mb-3">Discovery</h4>
            <p className="text-sm text-black/70">Understanding your goals, users, and constraints through research and stakeholder interviews.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-semibold">02</span>
            </div>
            <h4 className="text-lg font-semibold tracking-tight mb-3">Strategy</h4>
            <p className="text-sm text-black/70">Defining the creative direction, user flows, and technical requirements for optimal results.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-semibold">03</span>
            </div>
            <h4 className="text-lg font-semibold tracking-tight mb-3">Design</h4>
            <p className="text-sm text-black/70">Creating wireframes, prototypes, and high-fidelity designs with attention to every detail.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-semibold">04</span>
            </div>
            <h4 className="text-lg font-semibold tracking-tight mb-3">Delivery</h4>
            <p className="text-sm text-black/70">Final implementation, testing, and handoff with documentation and ongoing support.</p>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="text-center">
          <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight mb-6">Ready to start your project?</h3>
          <p className="text-lg sm:text-xl text-black/70 max-w-2xl mx-auto mb-8">Let&apos;s discuss how we can bring your vision to life with thoughtful design and efficient execution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              Start a Project
            </button>
            <button className="text-lg border border-gray-400 px-8 py-3 rounded-full bg-gray-50 font-bold text-[15px] text-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              View More Work
            </button>
          </div>
        </div>
      </section>

      <section className="sm:py-16 border-black/10 border-t pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">Like what you see? Let&apos;s work together</h3>
            <div className="mt-6">
              <button className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Main Pages</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><Link href="#" className="hover:text-black">Home</Link></li>
                <li><Link href="#" className="hover:text-black">About</Link></li>
                <li><Link href="#" className="hover:text-black text-black">Work</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Services</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><Link href="#" className="hover:text-black">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-black">Web Development</Link></li>
                <li><Link href="#" className="hover:text-black">Branding</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Resources</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><Link href="#" className="hover:text-black">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-black">Process</Link></li>
                <li><Link href="#" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Socials</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><Link href="#" className="hover:text-black">Instagram</Link></li>
                <li><Link href="#" className="hover:text-black">Twitter</Link></li>
                <li><Link href="#" className="hover:text-black">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 mt-10 pt-6">
          <p className="text-center text-black/70 text-sm">© 2025 KIRUBEL. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}
