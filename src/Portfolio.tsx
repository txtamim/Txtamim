import React from 'react';
import img from "./assets/Iam.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Landing Page",
      desc: "Responsive landing page with cart, product filter, and smooth animations",
      tech: ["Node", "Mongodb"],
      liveLink: "/sel",
      githubLink: "https://github.com/txtamim/gitlab/blob/main/src/Seller.tsx",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600 "
    },
    {
      id: 2,
      title: "Restaurant Website",
      desc: "Advertising a restaurant for better sales than traditional methods via web platform.",
      tech: ["React", "Tailwind"],
      liveLink: "/res",
      githubLink: "https://github.com/txtamim/gitlab/blob/main/src/Res.tsx",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
    },
    {
      id: 2,
      title: "Product landing page",
      desc: "Advertising a restaurant for better sales than traditional methods via web platform.",
      tech: ["Express", "React"],
      liveLink: "/pro",
      githubLink: "https://github.com/txtamim/gitlab/blob/main/src/Res.tsx",
      img: "https://static.vecteezy.com/system/resources/thumbnails/000/542/011/small/abstract-background-website-landing-page.png"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
      {/* --- Main Container --- */}
      <div className="max-w-5xl mx-auto [&>*:not(:nth-child(1))]:mx-4 pt-0 py-8">
        
        {/* --- Hero Section --- */}
        <section className="pt-8 p-1 md:p-12 mb-8 bg-gradient-to-b from-indigo-300 to-zinc-50 px-4">
          <div className="flex flex-row items-center gap-4 md:gap-10 ">
            {/* Intro Text */}
            <div className="flex-1">

              <h1 className="text-xl md:text-5xl font-bold mt-3 text-cyan-700 leading-tight md:w-72">
               Hi I'm <span className="text-blue-600 font-light">Tamim Iqbal</span>
              </h1>
              <h2 className="text-sm md:text-xl font-medium text-gray-600 mt-1 capitalize">Student & Developer</h2>
              
              <div className="[&>*]:text-cyan-600 [&>*]:py-1 [&>*]:px-2 md:[&>*]:px-4 md:flex md:[&>*]:my-5 md:flex-row md:[&>*]:mr-4 [&>*]:my-2 [&>*]:rounded-xl [&>*]:shadow-sm [&>*]:bg-white [&>*]:flex [&>*]:items-center [&>*]:justify-between [&>*]:w-full">
                <h3>2+<span className="text-blue-600 md:ml-2 tracking-wider whitespace-nowrap text-xs md:text-sm">Years Coding</span></h3>
                <h3>10+<span className="text-blue-600 md:ml-2 tracking-wider whitespace-nowrap text-xs md:text-sm">Projects</span></h3>
                <h3>100+<span className="text-blue-600 md:ml-2 tracking-wider whitespace-nowrap text-xs md:text-sm">GitHub Stars</span></h3>
              </div>
              
              <p className="text-xs md:text-lg mt-3 text-gray-500 leading-relaxed italic hidden md:block">
                A Student of HSC science batch 2026-2027 & Web template creator with modern MERN technology
              </p>
              
              {/* Quick Socials (Desktop) */}
              <div className="mt-5 hidden md:flex gap-4 text-xl">
                <a href="https://wa.me/8801890973552/" className="text-green-500 hover:text-green-600"><i className="bi bi-whatsapp"></i></a>
                <a href="https://www.facebook.com/share/1H9JxmR4eq/" className="text-blue-600 hover:text-blue-700"><i className="bi bi-facebook"></i></a>
                <a href="https://github.com/txtamim/" className="text-slate-900 hover:text-gray-700"><i className="bi bi-github"></i></a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-1/2 flex justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25"></div>
                <img 
                  src={img} 
                  alt="Profile" 
                  className="relative w-32 h-44 md:w-72 md:h-96 object-cover rounded-2xl shadow-md border-2 border-white"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Description & Socials */}
          <p className="text-xs mt-4 text-gray-500 italic block md:hidden">
            A Student of HSC science batch 2026-2027 & Web template creator with modern MERN technology
          </p>
          <div className="mt-4 flex md:hidden gap-4 text-xl">
            <a href="#" className="text-green-500 hover:text-green-600"><i className="bi bi-whatsapp"></i></a>
            <a href="#" className="text-blue-600 hover:text-blue-700"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-slate-900 hover:text-gray-700"><i className="bi bi-github"></i></a>
          </div>
        </section>

        {/* --- About & Personal Info Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 md:p-8 rounded-3xl shadow-lg shadow-blue-200">
            <h2 className="text-xl font-bold mb-6">Details</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <i className="bi bi-envelope-at-fill mt-0.5"></i>
                <div>
                  <p className="opacity-70 text-xs">Email</p>
                  <p className="font-medium break-all">txtamim058@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-telephone-fill mt-0.5"></i>
                <div>
                  <p className="opacity-70 text-xs">Phone</p>
                  <p className="font-medium">+880 1890973552</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt-fill mt-0.5"></i>
                <div>
                  <p className="opacity-70 text-xs">Location</p>
                  <p className="font-medium">Rangpur, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-mortarboard-fill mt-0.5"></i>
                <div>
                  <p className="opacity-70 text-xs">Education</p>
                  <p className="font-medium">HSC Student</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* About Me */}
          <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <i className="bi bi-person-lines-fill text-blue-600"></i> About Me
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-7 mb-4">
              Hi, My name is Md Tamim Iqbal. I'm a student. I'm a code lover boy. I started my journey of coding from 15 years old. If you want details about me, see my Facebook page.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-7">
              Now, I'm a full stack developer. I can create full web applications. But I don't work in marketplaces, I only create web templates. Thanks for visiting my portfolio!
            </p>
          </div>
        </div>

        {/* --- Hobbies Section --- */}
        <section className="px-1 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                Some Hobbies of Mine
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {/* Hobby Item */}
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-code-slash text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Coding</h3>
                  <p className="text-xs text-zinc-600">Building small projects and learning new tech</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-book text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Reading</h3>
                  <p className="text-xs text-zinc-600">Self-help and psychology books</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-camera text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Photography</h3>
                  <p className="text-xs text-zinc-600">Capturing simple moments in daily life</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-music-note-beamed text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Music</h3>
                  <p className="text-xs text-zinc-600">Lo-fi and instrumental while working</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-bicycle text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Cycling</h3>
                  <p className="text-xs text-zinc-600">Early morning rides for fresh mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-zinc-200 rounded-lg hover:border-indigo-400 transition bg-white shadow-sm">
                <i className="bi bi-palette text-indigo-500 text-xl"></i>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">Design</h3>
                  <p className="text-xs text-zinc-600">UI/UX and minimal design exploration</p>
                </div>
              </div>
            </div>

            {/* Mindful Tips */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <i className="bi bi-peace text-indigo-600 text-lg"></i>
                <h3 className="text-base font-semibold text-zinc-900">Mindful Reminders</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700">
                  <i className="bi bi-check-circle-fill text-indigo-500 text-xs mt-1"></i>
                  <span>Take 5 deep breaths before starting work</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700">
                  <i className="bi bi-check-circle-fill text-indigo-500 text-xs mt-1"></i>
                  <span>Focus on one task at a time, avoid multitasking</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700">
                  <i className="bi bi-check-circle-fill text-indigo-500 text-xs mt-1"></i>
                  <span>Step away from screen every 50 minutes</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700">
                  <i className="bi bi-check-circle-fill text-indigo-500 text-xs mt-1"></i>
                  <span>Practice gratitude for 3 small things daily</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-12">
          <div className="max-w-full mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-900">
                Available Template 
              </h2>
              <div className="w-40 mx-auto text-zinc-500 mt-10">Some template of me. for selling </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="grid grid-cols-2 md:grid-cols-3 overflow-x-auto pb-4 scrollbar-hid pl-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-36 h-auto md:h-auto md:w-64 bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-indigo-400 transition-all duration-200 shadow-sm mt-5"
                >
                  <div className="relative overflow-hidden md:h-28">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-28 md:w-full md:h-auto object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-1 text-zinc-900 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-xs line-clamp-2 mb-3">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link 
                        to={project.liveLink}
                        className="flex-1 px-2 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded text-xs font-medium text-white text-center flex items-center justify-center gap-1"
                      >
                        <i className="bi bi-eye"></i> Live
                      </Link>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 border border-zinc-300 hover:border-indigo-400 rounded text-zinc-700 hover:text-indigo-600 flex items-center justify-center"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="mt-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Expertise & Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-blue-600 mb-2">Frontend</h3>
              <ul className="text-xs space-y-1 text-gray-500">
                <li>React</li>
                <li>vanilla DOM</li>
                <li>Tailwindcss</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-blue-600 mb-2">Backend</h3>
              <ul className="text-xs space-y-1 text-gray-500">
                <li>Node.js</li>
                <li>RESTful APIs</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-blue-600 mb-2">Database</h3>
              <ul className="text-xs space-y-1 text-gray-500">
                <li>MongoDB atas</li>
                <li>local mongodb & setup</li>
                <li>Mongo schema</li>
                <li>MySQL basic</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-blue-600 mb-2">Tools</h3>
              <ul className="text-xs space-y-1 text-gray-500">
                <li>Git & GitHub</li>
                <li>AWS/vercel/render</li>
                <li>API Tester</li>
                <li>Linux / Termux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="mt-12 text-center pb-10">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Connect with me</p>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/8801890973552?text=Hey,%0ACan%20we%20chat%20each%20%26&20other?" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-green-500 text-xl hover:bg-green-500 hover:text-white transition-all">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/share/1H9JxmR4eq/" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-blue-600 text-xl hover:bg-blue-600 hover:text-white transition-all">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://github.com/txtamim/" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-slate-900 text-xl hover:bg-slate-900 hover:text-white transition-all">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://txtamim058@gmail.com" className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-red-500 text-xl hover:bg-red-500 hover:text-white transition-all">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <p className="mt-8 text-gray-400 text-xs italic">Designed by Tamim • &copy; 2026</p>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;
