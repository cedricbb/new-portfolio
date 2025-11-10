'use client'

import {useState} from 'react'
import {white} from "next/dist/lib/picocolors";
import {SiCss3, SiHtml5, SiMysql, SiNextdotjs, SiPhp, SiTailwindcss} from "react-icons/si";
import {FaBootstrap, FaJs, FaReact, FaWordpress} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

export default function About() {

    const [activeTab, setActiveTab] = useState('Experience')

    const tabs = ['Experience', 'Education', 'Skills', 'About me']

    // Experience
    const experiences = [
        {
            date: '2018 - Present',
            role: 'Full Stack Developer',
            company: 'Arxama',
        },
        {
            date: '2018 - Present',
            role: 'Full Stack Developer',
            company: 'Arxama',
        },
        {
            date: '2018 - Present',
            role: 'Full Stack Developer',
            company: 'Arxama',
        },
        {
            date: '2018 - Present',
            role: 'Full Stack Developer',
            company: 'Arxama',
        },
        {
            date: '2018 - Present',
            role: 'Full Stack Developer',
            company: 'Arxama',
        },
    ]

    // Education
    const educations = [
        {year: '2020', degree: 'RNCP niveau V', institute: 'Web Force 3'},
        {year: '2020', degree: 'RNCP niveau V', institute: 'Web Force 3'},
        {year: '2020', degree: 'RNCP niveau V', institute: 'Web Force 3'},
    ]

    const skills = [
        {name: 'HTML', icon: <SiHtml5 />},
        {name: 'CSS', icon: <SiCss3 />},
        {name: 'Javascript', icon: <FaJs />},
        {name: 'WordPress', icon: <FaWordpress />},
        {name: 'PHP', icon: <SiPhp />},
        {name: 'React', icon: <FaReact />},
        {name: 'Next.js', icon: <SiNextdotjs />},
        {name: 'Tailwind CSS', icon: <SiTailwindcss />},
        {name: 'Bootstrap', icon: <FaBootstrap />},
        {name: 'MySql', icon: <SiMysql />},
    ]

    return (
        <section className="px-[8%] lg:px-[16%] py-20 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h2 className='text-4xl font-bold mb-4'>Why hire me?</h2>
                    <p className='text-gray-400 mt-6 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt, id ipsam numquam omnis tempore.</p>
                    <div className="flex flex-col gap-5">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${activeTab === tab ? 'bg-[var(--color-primary)] text-black' : 'bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white'}`}>{tab}</button>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl font-bold mb-4">{activeTab}</h2>
                    <p className="text-gray-400 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto eum impedit nulla quod voluptatum.
                    </p>
                    {activeTab === 'Experience' && (
                        <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--color-primary)] transition-all duration-500 cursor-pointer">
                                        <h3 className='text-[var(--color-primary)] font-[var(--font-mono)] my-2'>{exp.date}</h3>
                                        <h4 className="text-2xl font-unbounded font-normal mb-1">{exp.role}</h4>
                                        <p className="text-gray-400 flex items-center text-sm mt-2">
                                            <span className='text-[var(--color-primary)] text-2xl pe-2'><GoDotFill /> </span>{exp.company}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'Education' && (
                        <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {educations.map((edu, index) => (
                                    <div key={index} className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--color-primary)] transition-all duration-500 cursor-pointer">
                                        <h3 className='text-[var(--color-primary)] font-[var(--font-mono)] my-2'>{edu.year}</h3>
                                        <h4 className="text-2xl font-unbounded font-normal mb-1">{edu.degree}</h4>
                                        <p className="text-gray-400 flex items-center text-sm mt-2">
                                            <span className='text-[var(--color-primary)] text-2xl pe-2'><GoDotFill /> </span>{edu.institute}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'Skills' && (
                       <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
                           {skills.map((skill, index) => (
                               <li key={index} className='relative cursor-pointer bg-gray-500/5 rounded py-11 flex-col flex items-center group'>
                                   <i className="text-6xl group-hover:text-primary transition-all duration-500">{skill.icon}</i>
                                   <span className='absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 font-semibold text-1xl text-white transition-all  group-hover:scale-100 group-hover:text-primary'>{skill.name}</span>
                               </li>
                           ))}
                       </ul>
                    )}
                    {activeTab === 'About me' && (
                        <div className="text-gray-400 space-y-4">
                            <p>
                                Hi! i'm <span className="text-primary font-semibold">Cédric </span>a passionate full-stack developer who enjoys crafting modern web applications, mobile applications.
                            </p>
                            <ul className="space-y-2">
                                <li><strong>Experience:</strong> 10+ year in Web Development</li>
                                <li><strong>Nationality:</strong> French</li>
                                <li><strong>Freelance:</strong> Available for projects</li>
                                <li><strong>Phone:</strong> (+33) 7 89 50 21 38</li>
                                <li><strong>Email:</strong> cedric.billard1709@proton.me</li>
                                <li><strong>Languages:</strong> French, English</li>
                            </ul>
                            <p>I specialize in WorPress, PHP, React, Next.js. I love turning ideas into functional, elegant web solutions that users enjoy.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
