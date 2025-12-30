"use client";

import React from 'react';
import Link from 'next/link';


export default function ContactPage() {
  return (
    <div className="relative sm:px-8 lg:px-12 max-w-7xl mr-auto ml-auto pr-5 pl-5">
      <header className="pt-6 sm:pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
          <div className="flex items-center justify-between sm:justify-start">
            <Link href="/" className="sm:text-base cursor-pointer text-sm font-semibold tracking-tight">
            KIRUBEL
            </Link>
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
            <span className="text-black/70 text-sm">/Contact</span>
          </div>
          
          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] font-semibold tracking-tight mb-6">
            Let&apos;s Create Something Exceptional Together
          </h1>
          
          <p className="text-lg sm:text-xl text-black/70 max-w-3xl leading-relaxed mb-8">
            Ready to bring your vision to life? Whether you have a clear project in mind or just an idea, I&apos;d love to hear from you and explore how we can work together.
          </p>
          
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">Available for Projects</span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">24hr Response Time</span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">Global Remote</span>
            <span className="px-4 py-2 rounded-full bg-black/5 text-black/70">Consultation Available</span>
          </div>
        </div>

        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <div className="relative">
            <div className="sm:h-12 flex sm:px-6 text-white bg-black w-full h-10 rounded-sm pr-4 pl-4 items-center justify-between">
              <div className="w-full grid grid-cols-3 text-[13px] sm:text-sm font-medium">
                <Link href="/work" className="flex items-center justify-center cursor-pointer">
                  Work
                </Link>
                <Link href="/process" className="flex border-x border-white/20 items-center justify-center cursor-pointer">
                  Process
                </Link>
                <Link href="/contact" className="flex items-center justify-center cursor-pointer">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative sm:py-12 lg:py-16 pt-10 pb-10">
        <div className="absolute right-1 sm:right-2 -top-3 sm:-top-1">
          <span className="sm:text-6xl text-4xl font-semibold tracking-tight">CONNECT</span>
        </div>

        <div className="overflow-hidden">
          <h2 className="leading-[0.9] select-none font-semibold tracking-tight" style={{ fontSize: 'clamp(68px, 17vw, 260px)' }}>
            CONTACT
          </h2>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">Ways to Connect</h3>
          <p className="text-black/70">Choose the method that works best for you. I respond to all inquiries within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-10 5L2 7"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold tracking-tight mb-3">Email</h4>
            <p className="text-black/70 text-sm mb-4">For project inquiries and detailed discussions</p>
            <a href="mailto:kirubelkassahun9@gmail.com" className="text-sm font-medium hover:underline">kirubelkassahun9@gmail.com</a>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold tracking-tight mb-3">Phone</h4>
            <p className="text-black/70 text-sm mb-4">Quick consultation and project discussion</p>
            <a href="tel:+251927192054" className="text-sm font-medium hover:underline">+251-927-192-054</a>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-8">
            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h4 className="text-xl font-semibold tracking-tight mb-3">Schedule a Call</h4>
            <p className="text-black/70 text-sm mb-4">Book a 30-minute discovery call</p>
            <button className="text-sm font-medium hover:underline">Book Meeting</button>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">Start a Conversation</h3>
            <p className="text-black/70 mb-8">Tell me about your project, timeline, and goals. The more details you share, the better I can understand how to help.</p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold tracking-tight">Project Types I Work On</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Enterprise Resource Planning (ERP Software)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Mobile App Design
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                     Web Design &amp; Development
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    E-commerce Solutions
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    SaaS Platforms
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Design Systems
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold tracking-tight">Typical Response Times</h4>
                <div className="space-y-3 text-sm text-black/70">
                  <div className="flex justify-between">
                    <span>Initial Response:</span>
                    <span className="font-medium text-black">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Proposal:</span>
                    <span className="font-medium text-black">2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Start:</span>
                    <span className="font-medium text-black">1-2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium tracking-tight mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40" placeholder="" />
                </div>
                <div>
                  <label className="block text-sm font-medium tracking-tight mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40" placeholder="" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium tracking-tight mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40" placeholder="example@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium tracking-tight mb-2">Company / Organization</label>
                <input type="text" className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40" placeholder="Company Name" />
              </div>

              <div>
                <label className="block text-sm font-medium tracking-tight mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40">
                  <option>Select a project type</option>
                  <option>ERP Solutions</option>
                  <option>Web Design &amp; Development</option>
                  <option>Mobile App Design</option>
                  <option>E-commerce</option>
                  <option>SaaS Platform</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium tracking-tight mb-2">Project Budget</label>
                <select className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40">
                  <option>Select a budget range</option>
                  <option>Br 40,000 - Br 100,000</option>
                  <option>Br 100,000 - Br 350,000</option>
                  <option>Br 500,000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium tracking-tight mb-2">Tell me about your project</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40" placeholder="Describe your project goals, timeline, and any specific requirements..."></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full text-lg border border-black px-8 py-4 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="text-center mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">Connect on Social</h3>
          <p className="text-black/70">Follow my work and stay updated on the latest projects and insights.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#" className="group">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-6 group-hover:from-green-100 group-hover:to-emerald-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight">Twitter</h4>
                  <p className="text-sm text-black/70">@kirabelll</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="group">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-6 group-hover:from-green-100 group-hover:to-emerald-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight">Instagram</h4>
                  <p className="text-sm text-black/70">@kirabelll</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="group">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-6 group-hover:from-green-100 group-hover:to-emerald-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight">LinkedIn</h4>
                  <p className="text-sm text-black/70">Kirubel Kassahun</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="group">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 bg-gradient-to-br from-green-50 to-emerald-100 p-6 group-hover:from-green-100 group-hover:to-emerald-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F24E1E] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 11.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path>
                    <path d="M12 7.5l0 9"></path>
                    <path d="M9 10.5a1.5 1.5 0 0 1 1.5 -1.5h1.5"></path>
                    <path d="M9 13.5a1.5 1.5 0 0 1 1.5 -1.5h1.5"></path>
                    <path d="M9 16.5a1.5 1.5 0 0 1 1.5 -1.5h1.5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold tracking-tight">Dribbble</h4>
                  <p className="text-sm text-black/70">Kirubelkassahun</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="mb-12">
          <h3 className="sm:text-3xl text-2xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h3>
          <p className="text-black/70">Quick answers to common questions about working together.</p>
        </div>

        <div className="space-y-6">
          <div className="border border-black/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold tracking-tight mb-3">What&apos;s your typical project timeline?</h4>
            <p className="text-black/70">Project timelines vary based on scope and complexity. A typical website redesign takes 4-8 weeks, while larger projects like SaaS platforms can take 3-6 months. I&apos;ll provide a detailed timeline during our initial consultation.</p>
          </div>

          <div className="border border-black/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold tracking-tight mb-3">Do you work with international clients?</h4>
            <p className="text-black/70">Absolutely! I work with clients worldwide and have experience collaborating across different time zones. I use modern communication tools to ensure smooth project coordination regardless of location.</p>
          </div>

          <div className="border border-black/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold tracking-tight mb-3">What&apos;s included in your design process?</h4>
            <p className="text-black/70">My process includes discovery &amp; research, strategic planning, visual design, and delivery &amp; support. Each phase includes regular check-ins, revisions, and deliverables to ensure we&apos;re aligned throughout the project.</p>
          </div>

          <div className="border border-black/10 rounded-lg p-6">
            <h4 className="text-lg font-semibold tracking-tight mb-3">Do you offer ongoing support after launch?</h4>
            <p className="text-black/70">Yes! I provide 30 days of post-launch support included with every project. After that, I offer maintenance packages and ongoing support options tailored to your needs.</p>
          </div>
        </div>
      </section>

      <section className="sm:py-24 border-black/10 border-t pt-16 pb-16">
        <div className="text-center">
          <h3 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight mb-6">
            Ready to start your project?
          </h3>
          <p className="text-lg sm:text-xl text-black/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your vision and create something exceptional together. I&apos;m excited to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='#' className="text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              Send a Message
            </a>
            <a href='#' className="text-lg border border-gray-400 px-8 py-3 rounded-full bg-gray-50 font-bold text-[15px] text-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      <section className="sm:py-16 border-black/10 border-t pt-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="uppercase leading-[1.05] tracking-tight font-semibold text-[28px] sm:text-[36px] lg:text-[48px]">
              Let&apos;s create something amazing together
            </h3>
            <div className="mt-6">
              <a 
                href="mailto:kirubelkassahun9@gmail.com"
                className="inline-block text-lg border border-black px-8 py-3 rounded-full bg-[#6AE9A3] font-bold text-[15px] shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 active:translate-y-2"
              >
               kirubelkassahun9@gmail.com
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Main Pages</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><Link href="/" className="hover:text-black">Home</Link></li>
                <li><Link href="/process" className="hover:text-black">process</Link></li>
                <li><Link href="/work" className="hover:text-black">Work</Link></li>
                <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Contact</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><a href="mailto:kirubelkassahun9@gmail.com" className="hover:text-black">Email</a></li>
                <li><a href="tel:+1-416-555-0123" className="hover:text-black">Phone</a></li>
                <li><a href="#" className="hover:text-black">Schedule Call</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Services</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><a href="#" className="hover:text-black"> Enterprise Resource Planning (ERP) </a></li>
                <li><a href="#" className="hover:text-black">Web Development</a></li>
                <li><a href="#" className="hover:text-black">Mobile Development</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight mb-3">Socials</div>
              <ul className="space-y-2 text-black/70 text-sm">
                <li><a href="#" className="hover:text-black">Instagram</a></li>
                <li><a href="#" className="hover:text-black">Twitter</a></li>
                <li><a href="#" className="hover:text-black">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 mt-10 pt-6">
          <p className="text-center text-black/70 text-sm">© 2025 KIRUBEL. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
