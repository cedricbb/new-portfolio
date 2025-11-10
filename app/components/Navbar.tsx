"use client"
import Link from "next/link"
import {useState} from "react";
import {usePathname} from "next/navigation";
import {RiMenu3Fill} from "react-icons/ri";

const navLinks = [
    {
        href: "/services",
        title: "Services"
    },
    {
        href: "/about",
        title: "About"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/contact",
        title: "Contact"
    }
]

export default function Navbar() {

    const pathname = usePathname()

    const [isNavbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="w-full z- transition-all duration-300">
            <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-6">
                <Link href="/" className="text-white text-5xl font-bold logo">
                    Cedric<span className="text-primary">.</span>
                </Link>
                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex nav-menu items-center space-x-5">
                        {navLinks.map(link => (
                            <Link href={link.href} key={link.title} className={`text-base font-bold transition-all text-white px-2 py-2 rounded hover:text-primary ${pathname === link.href ? 'active-links text-primary' : ''}`}>{link.title}</Link>
                        ))}
                    </div>
                    <Link href="/contact" className="bg-[var(--primary)] px-5 py-2 text-xl text-white font-semibold cursor-pointer rounded-full transition-all duration-300 hover:bg-transparent hover:text-white shadow-md hover:shadow-[0_2px_5px_#72E3ADFF]">Hire Me</Link>
                </div>
                <button className="lg:hidden text-2xl" onClick={() => setNavbarOpen(!isNavbarOpen)}><RiMenu3Fill className="size-5 text-white"/></button>
            </div>

            <div className={`lg:hidden bg-[#1c1b21] text-white border-y border-[primary-color] px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${isNavbarOpen ? 'max-h-96 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                <ul className="space-y-4 menu">
                    {navLinks.map(link => (
                        <li key={link.title}>
                            <Link href={link.href} className="block text-base relative" onClick={() => setNavbarOpen(false)}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
