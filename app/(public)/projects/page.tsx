'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Image from "next/image";
import { useRef } from "react";
import 'swiper/css'
import 'swiper/css/navigation'
import {FaJsSquare, FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import Link from "next/link";
import {GoArrowUpRight} from "react-icons/go";
import {BiLeftArrowAlt, BiLogoGithub, BiRightArrowAlt} from "react-icons/bi";

export default function Projects() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const projects = [
        {
            id: '01',
            title: 'React JS Project',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt, id ipsam numquam omnis tempore.',
            tech: ['React JS', 'Tailwind css', 'Javascript'],
            img: '/Project-1.jpg',
        },
        {
            id: '02',
            title: 'React JS Project',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt, id ipsam numquam omnis tempore.',
            tech: ['React JS', 'Tailwind css', 'Javascript'],
            img: '/Project-2.jpg',
        },
        {
            id: '03',
            title: 'React JS Project',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt, id ipsam numquam omnis tempore.',
            tech: ['React JS', 'Tailwind css', 'Javascript'],
            img: '/Project-3.jpg',
        },
        {
            id: '04',
            title: 'React JS Project',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt, id ipsam numquam omnis tempore.',
            tech: ['React JS', 'Tailwind css', 'Javascript'],
            img: '/Project-4.jpg',
        },
    ]

    return (
        <div className="px-[8%] lg:px-[16%] py-15 text-white">
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // @ts-expect-error
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-expect-error
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                spaceBetween={40}
                slidesPerView={1}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="work-content">
                                <h2 className='text-8xl font-bold stroke-text'>{project.id}</h2>
                                <h3 className='text-5xl font-semibold font-unbounded mt-4'>{project.title}</h3>
                                <p className='text-gray-400 mt-3 text-lg leading-relaxed'>{project.desc}</p>
                                <div className="flex gap-4 mt-4">
                                    {project.tech.map((tech, index) => {
                                        let IconComponent;
                                        switch (tech.toLowerCase()) {
                                            case 'react js':
                                                IconComponent = FaReact;
                                                break;
                                            case 'tailwind css':
                                                IconComponent = SiTailwindcss;
                                                break;
                                            case 'javascript':
                                                IconComponent = FaJsSquare;
                                                break;
                                            default:
                                                IconComponent = null;
                                        }
                                        return IconComponent ? (
                                            <div key={index} className="work-icons text-4xl text-[var(--color-primary)] cursor-pointer hover:text-white transition-all duration-300" title={tech}>
                                                <IconComponent />
                                            </div>
                                        ) : null
                                    })}
                                </div>
                                <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                                    <Link href='#' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500'>
                                        <GoArrowUpRight className='text-2xl' />
                                    </Link>
                                    <Link href='#' className='w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500'>
                                        <BiLogoGithub className='text-2xl' />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative work-image">
                                <Image src={project.img} alt={project.title} width={650} height={400} className='rounded-lg shadow-lg' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex gap-3 justify-end mt-6">
                    <button
                        ref={prevRef}
                        className='w-12 h-12 flex items-center justify-center bg-[var(--color-primary)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'
                    >
                        <BiLeftArrowAlt className='text-2xl' />
                    </button>
                    <button
                        ref={nextRef}
                        className='w-12 h-12 flex items-center justify-center bg-[var(--color-primary)] text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500'
                    >
                        <BiRightArrowAlt className='text-2xl' />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}