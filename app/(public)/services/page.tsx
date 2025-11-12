'use client'

import { GoArrowUpRight } from "react-icons/go";

const ServicesData = [
    {
        id: '01',
        title: 'Web Development',
        desc: 'I design high-performance, modern, and customized websites, designed to offer a smooth and intuitive experience. From design to launch, I ensure clean, fast, and optimized integration.',
    },
    {
        id: '02',
        title: 'Mobile Development',
        desc: 'I develop hybrid mobile applications focused on user experience. My goal: reliable, responsive, and easy-to-maintain apps that are compatible with both Android and iOS.',
    },
    {
        id: '03',
        title: 'SEO',
        desc: 'I optimize the performance and structure of your websites to improve their visibility on search engines. Clean code, modern practices, and technical audits for better positioning.',
    },
    {
        id: '04',
        title: 'WordPress Plugin Creation',
        desc: 'I create custom WordPress extensions to meet specific needs. Whether adding functionality or automating a process, each plugin is designed to be lightweight, secure, and maintainable.',
    },
    {
        id: '05',
        title: 'WordPress Formation',
        desc: 'I help individuals and professionals get started with WordPress. Training courses are tailored to your level and needs: content management, theme creation, optimization, security, and best practices for development.',
    },
]
export default function Services() {
    return (
        <section className="px-[8%] lg:px-[16%] py-15 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ServicesData.map((service, index) => (
                    <div key={index} className='service-card group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[primary-color]'>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className='text-6xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary]'>{service.id}</h3>
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[var(--color-primary)] group-hover:text-white duration-300">
                                <GoArrowUpRight className='text-3xl' />
                            </div>
                        </div>
                        <h2 className='text-4xl        font-normal mb-5 transition-colors duration-300 group-hover:text-[var(--color-primary)]'>{service.title}</h2>
                        <p className='text-gray-400 text-lg'>{service.desc}</p>
                        <div className='border-t border-gray-700 group-hover:border-[var(--color-primary)] mt-5 duration-300'></div>
                    </div>
                ))}
            </div>
        </section>
    )
}