import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

const socials = [
    {
        name: "Github",
        icon: <FaGithub />,
        url: "https://github.com/cbillard"
    },
    {
        name: "Linkedin",
        icon: <FaLinkedinIn />,
        url: "https://linkedin.com/in/cbillard"
    }
]
const Social = () => {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className=" size-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-primary-foreground hover:transition-all duration-500">{item.icon}</span>
                    </Link>
            ))}
        </div>
    )
}
export default Social
