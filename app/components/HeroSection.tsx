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

export default function HeroSection() {
    return (
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
    );
}

