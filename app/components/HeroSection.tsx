import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Social from "@/app/components/Social";

export default function HeroSection() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <Badge
                        variant="secondary"
                        className="rounded-full py-1 border-border"
                        asChild
                    >
                        <Link href="#">
                            Développeur d'applications
                        </Link>
                    </Badge>
                    <h1 className=" text-white mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
                        Salut, je suis Cédric
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg text-[#ADB7BE]">
                        Explorer a collection of Shadcn UI blocks and components, ready to
                        preview and copy. Streamline your development workflow with
                        easy-to-implement examples.
                    </p>
                    <div className="mt-12 flex items-center gap-4">
                        <Button size="lg">
                            Técharger mon CV <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                        <Social />
                    </div>
                </div>
                {/*<div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none" />*/}
            </div>
        </div>
    );
}

