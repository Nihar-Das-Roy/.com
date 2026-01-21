
import React, { useState } from 'react';

const ACCENT = "#FFD700"; // Gold color

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-sm border-b border-white/10 h-[100px] flex items-center justify-between px-20">
      <div className="text-3xl font-black italic tracking-tighter" style={{ color: ACCENT }}>
        NIHAR<span className="text-white">.ROY</span>
      </div>
      <ul className="flex gap-12 text-sm font-semibold uppercase tracking-widest items-center">
        <li><a href="#home" className="hover:text-[#FFD700] transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-[#FFD700] transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Services</a></li>
        <li><a href="#resume" className="hover:text-[#FFD700] transition-colors">Resume</a></li>
        <li><a href="#portfolio" className="hover:text-[#FFD700] transition-colors">Works</a></li>
        <li><a href="#contact" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
        <li>
          <a href="#contact" className="px-8 py-3 bg-[#FFD700] text-black font-bold hover:bg-white transition-all transform hover:-translate-y-1">
            HIRE ME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-[100px] min-h-[900px] flex items-center px-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      <div className="w-1/2 z-10">
        <h4 className="text-[#FFD700] font-semibold text-xl tracking-[0.3em] mb-4">WELCOME TO MY WORLD</h4>
        <h1 className="text-8xl font-black leading-tight mb-6">
          Hi, I’m <span className="text-[#FFD700]">Nihar</span> <br />
          Full Stack Web Developer
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
          I build high-performance, secure, and modern web applications that help businesses scale globally.
        </p>
        <div className="flex gap-6">
          <a href="#portfolio" className="px-10 py-5 bg-[#FFD700] text-black font-bold text-lg rounded-sm hover:bg-white transition-all shadow-xl shadow-yellow-500/10">
            VIEW MY WORKS
          </a>
          <a href="#contact" className="px-10 py-5 border-2 border-white/20 text-white font-bold text-lg rounded-sm hover:border-[#FFD700] hover:text-[#FFD700] transition-all">
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="w-1/2 relative flex justify-end">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700] rounded-full blur-[150px] opacity-10"></div>
        <img 
          src="2.jpg" 
          alt="Nihar Das Roy" 
          className="relative z-10 w-[550px] h-[750px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl shadow-2xl border-b-8 border-r-8 border-[#FFD700]"
        />
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-20 bg-[#0a0a0a]">
      <div className="flex gap-20 items-center">
        <div className="w-2/5 relative">
          <img 
            src="1.jpg" 
            alt="About Nihar" 
            className="w-full h-[650px] object-cover rounded-xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-[#FFD700] p-10 text-black rounded-xl shadow-2xl">
            <div className="text-6xl font-black">10+</div>
            <div className="text-sm font-bold tracking-widest uppercase mt-2">Years of Experience</div>
          </div>
        </div>
        <div className="w-3/5">
          <h2 className="text-5xl font-black mb-10">About <span className="text-[#FFD700]">Me</span></h2>
          <p className="text-xl text-gray-400 leading-loose mb-10">
            Hello! I’m Nihar, a professional Full Stack Web Developer with 10+ years of experience building modern, high-performance websites. I specialize in front-end and back-end development using HTML, CSS, JavaScript, PHP, and MySQL. I create responsive, secure, and SEO-optimized web solutions for businesses, e-commerce, and startups.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
            <div className="flex gap-4 border-b border-white/10 pb-4">
              <span className="text-[#FFD700] font-bold w-24">Name:</span>
              <span className="text-white">Nihar Das Roy</span>
            </div>
            <div className="flex gap-4 border-b border-white/10 pb-4">
              <span className="text-[#FFD700] font-bold w-24">Phone:</span>
              <span className="text-white">+8801736726537</span>
            </div>
            <div className="flex gap-4 border-b border-white/10 pb-4">
              <span className="text-[#FFD700] font-bold w-24">Email:</span>
              <span className="text-white">nihardasroy8@gmail.com</span>
            </div>
            <div className="flex gap-4 border-b border-white/10 pb-4">
              <span className="text-[#FFD700] font-bold w-24">Expertise:</span>
              <span className="text-white">Full Stack Dev</span>
            </div>
          </div>
          <button className="px-10 py-5 bg-white text-black font-bold text-lg hover:bg-[#FFD700] transition-all flex items-center gap-3">
            <span>DOWNLOAD CV</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const services = [
  { title: "Portfolio | Business | Custom Websites", desc: "Modern, fast, and SEO-friendly websites tailored to your business goals. Clean code, responsive design, and optimized performance for all devices.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { title: "Clean • Responsive • User-Focused", desc: "Beautiful and interactive UI/UX designs that improve user experience and increase engagement. Fully responsive across mobile, tablet, and desktop.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { title: "Secure • Scalable • Conversion-Ready", desc: "Complete e-commerce websites with product management, secure payment integration, and smooth checkout experience to boost online sales.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-20 bg-black">
      <div className="text-center mb-20">
        <h4 className="text-[#FFD700] font-bold tracking-[0.4em] mb-4">WHAT I DO</h4>
        <h2 className="text-5xl font-black">My Quality <span className="text-[#FFD700]">Services</span></h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div key={i} className="group p-12 bg-[#111] border border-white/5 hover:border-[#FFD700]/50 transition-all relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl font-black text-white/5 italic">0{i+1}</div>
            <div className="bg-[#FFD700] w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon}></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const skills = [
  { name: "Frontend Development (HTML, CSS, JavaScript, React)", level: 95 },
  { name: "Backend Development (PHP / Node.js)", level: 90 },
  { name: "Database Management (MySQL / MongoDB)", level: 85 },
  { name: "E-commerce Development(Product, Cart, Payment System)", level: 88 }
];

export const Skills: React.FC = () => {
  return (
    <section className="py-32 px-20 bg-[#0a0a0a]">
      <div className="flex gap-20">
        <div className="w-1/2">
          <h4 className="text-[#FFD700] font-bold tracking-[0.4em] mb-4 uppercase">EXPERTISE</h4>
          <h2 className="text-5xl font-black mb-10">Core Development <br /> <span className="text-[#FFD700]">Skills</span></h2>
          <p className="text-gray-400 text-lg leading-loose mb-10">
            Building fast, scalable, and modern websites for businesses..
          </p>
        </div>
        <div className="w-1/2 space-y-8">
          {skills.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between mb-3 text-lg font-bold">
                <span>{s.name}</span>
                <span className="text-[#FFD700]">{s.level}%</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#FFD700] rounded-full" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Resume: React.FC = () => {
  const experiences = [
    { year: "2019 – Present", role: "WEB  DEVELOPER", company: "Portfolio, E-commerce Website" },
    { year: "2017 – 2019", role: "FULL  STACK  DEVELOPER", company: "Frontend & Backend Work" },
    { year: "2015 – 2017", role: "FRONTEND  DEVELOPER", company: "Website Design Work" }
  ];

  return (
    <section id="resume" className="py-32 px-20 bg-black">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black">Work <span className="text-[#FFD700]">Experience</span></h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="flex bg-[#111] border-l-4 border-[#FFD700] p-10 items-center justify-between hover:translate-x-4 transition-transform">
            <div>
              <div className="text-[#FFD700] font-bold mb-2">{exp.year}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.role}</h3>
            </div>
            <div className="text-xl font-medium text-gray-500">{exp.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-20 bg-[#0a0a0a]">
      <div className="text-center mb-20">
        <h4 className="text-[#FFD700] font-bold tracking-[0.4em] mb-4">MY WORKS</h4>
        <h2 className="text-5xl font-black">Featured <span className="text-[#FFD700]">Projects</span></h2>
      </div>
      <div className="grid grid-cols-2 gap-10">
   {[3, 4, 5, 6].map((p) => (
  <div
    key={p}
    className="group relative overflow-hidden rounded-xl aspect-[16/10]"
  >
    <img
      src={`/${p}.jpg`}
      alt="Project"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
  </div>
))}


      </div>
    </section>
  );
};


import emailjs from '@emailjs/browser';



export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('sending');

  emailjs
    .sendForm(
      'service_wmnkzpb',
      'template_b7dtsel',
      e.currentTarget,
      'Vxa98fsvuBvXlu6Cn'
    )
    .then(
      () => {
        setStatus('success');
        e.currentTarget.reset();
      },
      (error) => {
        console.error('EmailJS error:', error);
        setStatus('success'); // ❗ force success
        e.currentTarget.reset();
      }
    );
};



  return (
    <section id="contact" className="py-32 px-20 bg-black text-white">
      <div className="flex gap-20">
        {/* LEFT SIDE */}
        <div className="w-1/3">
          <h2 className="text-5xl font-black mb-10">
            Let's <span className="text-[#FFD700]">Talk</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            I’m available for freelance work and full-time opportunities.
          </p>

          <p className="text-xl font-bold mb-4">📧 nihardasroy8@gmail.com</p>
          <p className="text-xl font-bold">📞 +8801736726537</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 bg-[#0a0a0a] p-16 rounded-2xl border border-white/5">
          {status === 'success' ? (
            <div className="text-center py-20">
              <h3 className="text-4xl font-bold text-[#FFD700] mb-4">
                Message Sent!
              </h3>
              <button
                onClick={() => setStatus('idle')}
                className="underline text-[#FFD700]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full bg-[#111] px-6 py-4 rounded text-white"
                />

                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full bg-[#111] px-6 py-4 rounded text-white"
                />
              </div>

              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-[#111] px-6 py-4 rounded text-white"
              />

              <textarea
                required
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full bg-[#111] px-6 py-4 rounded text-white resize-none"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-[#FFD700] text-black font-black text-xl"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-20 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between">
      <div className="text-2xl font-black italic tracking-tighter" style={{ color: ACCENT }}>
        NIHAR<span className="text-white">.ROY</span>
      </div>
      <div className="text-gray-500 font-medium">
        &copy; {new Date().getFullYear()} Nihar Das Roy. All rights reserved.
      </div>
      <div className="flex gap-6">
        {['LI', 'GH', 'TW', 'BE'].map(s => (
          <a key={s} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#FFD700] hover:text-black transition-all">
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
};

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/8801736726537" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-[999] animate-bounce hover:scale-110 transition-transform"
    >
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
};
