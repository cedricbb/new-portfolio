"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Social from "@/app/components/Social";
import Image from "next/image";
import avatar from "../../public/avatar.png"
import { TypeAnimation } from "react-type-animation";
import {useEffect, useRef} from "react";
import {CountUp} from "countup.js";

export default function HeroSection() {

    const statsData = [
        { title: "Years of\nExperience", value: 10 },
        { title: "Projects\nCompleted", value: 5 },
        { title: "Technologies\nMastered", value: 4 },
    ]

    const countRefs = useRef<(HTMLHeadingElement | null)[]>([])

    useEffect(() => {
        countRefs.current.forEach((el, index) => {
            if (el) {
                const countUp = new CountUp(el, statsData[index].value, {
                    duration: 3,
                    useEasing: true,
                    useGrouping: true,
                    separator: ",",
                    decimal: ".",
                })
                if (!countUp.error) {
                    countUp.start()
                } else {
                    console.error(countUp.error)
                }
            }
        })
    }, [statsData])

    return (
        <div className="h-[100vh] text-white py-12 relative">
            <div className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-foreground)] blur-[100px] -z-10"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-foreground)] blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 laft-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-foreground)] blur-[100px] -z-10"></div>
            <div className="flex items-center justify-center overflow-hidden">
                <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 md:py-12">
                    <div className="my-auto">
                        <Badge
                            variant="secondary"
                            className="rounded-full py-1 border-border"
                            asChild
                        >
                            <Link href="#">
                                Software Developer
                            </Link>
                        </Badge>
                        <h1 className=" text-white mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
                            <span className="text-primary">Hello, I'm{" "}</span>
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    "Cédric",
                                    1000,
                                    "Mobile Developer",
                                    1000,
                                    "Web Developer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="mt-6 max-w-[60ch] text-lg text-[#ADB7BE]">
                            Explorer a collection of Shadcn UI blocks and components, ready to
                            preview and copy. Streamline your development workflow with
                            easy-to-implement examples.
                        </p>
                        <div className="mt-12 flex flex-col xl:flex-row items-center gap-4">
                            <Button size="lg" className="cursor-pointer">
                                Download CV <FiDownload className="h-5! w-5!" />
                            </Button>
                            <Button size="lg" variant="outline" className="cursor-pointer">
                                Hire Me <GoArrowUpRight className="h-5! w-5!" />
                            </Button>
                            <Social />
                        </div>
                    </div>
                    <div className="w-full h-full place-self-center my-auto flex items-center justify-center flex-row">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <Image src={avatar} alt="" width={300} height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="stats px-[8%] lg:px-[16%] mt-30 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <h1 ref={el => {
                            if (el) {
                                countRefs.current[index] = el;
                            }
                        }} className="text-7xl font-bold text-primary">0</h1>
                        <p className="text-xl ps-4 text-gray-400 font-semibold whitespace-pre-line">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

