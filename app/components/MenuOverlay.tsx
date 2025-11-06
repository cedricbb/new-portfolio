import NavLink from "@/app/components/NavLink";
import { LinkProps } from "next/link";

type MenuLink = {
    href: LinkProps['href'];
    title: string;
}

type MenuOverlayProps = {
    links: MenuLink[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
        </ul>
    )
}
export default MenuOverlay
