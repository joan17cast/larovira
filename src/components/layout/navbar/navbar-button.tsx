import type React from "react";
import { Link } from "@tanstack/react-router";
interface NavbarButtonProps {
	children: React.ReactNode;
	to: string;
}

const NavbarButton = ({ children, to }: NavbarButtonProps) => {
	return (
		<Link
			to={to}
			className="bg-brown-500 hover:bg-stone-200  font-bold py-1 px-6 rounded-full transition-colors duration-300"
		>
			{children}
		</Link>
	);
};

export default NavbarButton;
